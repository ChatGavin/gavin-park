// 检测服务器是否可用
function isServerAvailable(url) {
    return fetch(url, {method: 'HEAD'})
        .then(() => true)
        .catch(() => false);
}

// 创建 WebSocket 连接，用于接收服务器发送的自动刷新信号
async function connectWebSocket() {
    // WebSocket 连接地址
    const ws = new WebSocket('ws://localhost:8080');

    // 当连接成功时
    ws.onopen = () => {
        console.log('WebSocket 连接已建立');
    };

    // 当收到消息时
    ws.onmessage = (event) => {
        if (event.data === 'reload') {
            console.log('收到服务端消息，重新加载页面');
            chrome.runtime.reload(); // 重新加载插件
        }
    };

    // 当连接关闭时
    ws.onclose = () => {
        console.log('WebSocket 连接已断开，尝试重新连接...');
        setTimeout(async () => {
            // 检测服务器是否可用
            const serverAvailable = await isServerAvailable('http://localhost:8080');
            if (!serverAvailable) {
                console.log('Server is not available. Skipping WebSocket connection.');
                return;
            }
            await connectWebSocket();
        }, 1000); // 1秒后重连
    };

    // 监听错误
    ws.onerror = (error) => {
        console.error('WebSocket 发生错误:', error);
        ws.close();
    };
}

await connectWebSocket();

