
const memoKey = 'syncedMemoData';
let currentMemoState = {
    content: '',
    imageUrl: ''
};

function loadMemo() {
    const saved = localStorage.getItem(memoKey);
    if (saved) {
        try {
            currentMemoState = JSON.parse(saved);
            document.getElementById("memoContent").value = currentMemoState.content || '';
            updatePreview(currentMemoState.imageUrl);
        } catch(e) {}
    }
}

function saveMemo() {
    const newContent = document.getElementById("memoContent").value;
    currentMemoState.content = newContent;

    // 触发 storage event 所有打开的 tab 都能监听变化
    localStorage.setItem(memoKey, JSON.stringify(currentMemoState));
    
    alert("✅ 已保存！可在其它标签页查看更新");
}

function clearAll() {
    if (!confirm("⚠️ 是否清空所有记录？")) return;
    currentMemoState = {content: '', imageUrl: ''};
    localStorage.removeItem(memoKey);

    document.getElementById("memoContent").value = "";
    updatePreview('');
}

// 图像上传处理
document.getElementById("uploadImageInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        currentMemoState.imageUrl = e.target.result;
        updatePreview(e.target.result);
        localStorage.setItem(memoKey, JSON.stringify(currentMemoState)); // 自动保存
    };
    reader.readAsDataURL(file); // 使用 base64 存储便于演示，实际生产建议服务器托管
});

function updatePreview(url) {
    const previewImg = document.getElementById("previewImage");
    if (url && url.startsWith('data:image')) {
        previewImg.src = url;
        previewImg.classList.remove("hidden");
    } else {
        previewImg.classList.add("hidden");
    }
}

window.addEventListener("storage", function(event){
    if(event.key === memoKey){
        loadMemo(); // 当另一个 tab 修改了 memo 后刷新当前页面状态
    }
});

loadMemo();
