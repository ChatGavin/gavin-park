import {build} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path'
import chokidar from 'chokidar';
import fs from 'fs/promises';
import {runReload} from './reload.js';

console.log('开始执行 plugin 构建脚本');

// 模拟 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//
const RootDir = path.resolve(__dirname, '../../..');
const PluginDir = path.resolve('src/plugin');
const DistDir = path.resolve(RootDir, 'src/plugin/dist');
console.log('指定 plugin 构建目录:', PluginDir);

// 清除 dist 文件夹
async function cleanDist() {
    try {
        console.log('开始清理 dist 文件夹...');
        await fs.rm(DistDir, {recursive: true, force: true});
        console.log('dist 文件夹清理成功');
    } catch (error) {
        console.error('dist 文件夹清理失败:', error);
    }
}

// 构建插件
async function buildPlugin() {
    try {
        console.log('plugin 正在构建中...');
        await cleanDist();
        await build({
            root: PluginDir,
        });
        console.log('plugin 构建成功: 文件已生成到 plugin/dist 文件夹',);
    } catch (error) {
        console.error('plugin 构建失败:', error);
    }
}

// 监听文件变动, 自动构建
chokidar.watch(PluginDir, {
    ignored: /dist/, // 忽略文件
    persistent: true,
    ignoreInitial: true,
}).on('all', async (event, path) => {
        console.log(`检测到文件变动, 触发事件: ${event}, 触发位置: ${path}`);
        await buildPlugin();
    }
);

//
await buildPlugin();

(async () => {
    await buildPlugin();
    runReload();
})()

