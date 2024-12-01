import {WebSocketServer} from 'ws';
import chokidar from 'chokidar';
import path from "path";
import {fileURLToPath} from "url";

// 配置
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RootDir = path.resolve(__dirname, '../../..');
const DistDir = path.resolve(RootDir, 'src/plugin/dist');

let wss = null;
let clients = []; // 存储连接的客户端
let debounceTimeout = null; // 防抖

// 初始化 WebSocket 服务器
function initWebSocketServer() {
    if (wss) return;
    wss = new WebSocketServer({port: PORT}, () => {
        console.log(`创建 WebSocket 服务器成功, 地址: ws://localhost:${PORT}`);
    });

    // 监听 WebSocket 客户端连接
    wss.on('connection', (ws) => {
        clients.push(ws);
        // 清理断开连接的客户端
        ws.on('close', () => {
            console.log('客户端断开连接');
            clients = clients.filter((client) => client !== ws);
        });
    });
}

// 启动文件监听
function startWatcher() {
    const watcher = chokidar.watch(DistDir, {
        ignored: /(^|[\/\\])\../, // 忽略隐藏文件
        persistent: true,
        usePolling: true, // 启用轮询模式，适合网络驱动或虚拟文件系统
        interval: 100, // 轮询间隔
        awaitWriteFinish: {
            stabilityThreshold: 500, // 文件稳定时间
            pollInterval: 100, // 检测间隔
        },
    });

    // 当文件发生变化时通知客户端
    watcher.on('all', () => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            console.log('检测到文件变动, 通知客户端刷新');
            notifyClients();
        }, 500);
    });
}

// 通知客户端刷新
function notifyClients() {
    clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send('reload');
        }
    });
}

//
export function runReload() {
    initWebSocketServer();
    startWatcher();
}
