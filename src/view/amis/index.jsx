/**
 * 1.安装 amis-editor
 * 2.引入 mobx-react
 * 3.移除 React.StrictMode（amis 不兼容！只运行于开发环境，辅助开发）
 * 4.引入 amis-editor 相关样式（参考 amis-editor-demo 项目）
 */

//
import './style/index.js';
import styles from './style/layout.module.css';
//
import {Editor} from 'amis-editor';

function App() {
    return (
        <div className={styles.container}>
            <Editor className={styles.editor}/>
        </div>
    )
}


export default App
