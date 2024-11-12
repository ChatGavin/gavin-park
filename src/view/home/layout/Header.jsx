//
import styles from '../style/layout.module.css'
//
import {Tooltip} from 'antd'
import {GithubFilled} from '@ant-design/icons'

function App() {
    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    Antd Visual
                </div>
                <div>
                    <Tooltip title="高级表单">
                        <GithubFilled
                            className={styles.icon}
                            onClick={() => {
                                window.open('https://github.com/linidea/antd-visual')
                            }}/>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default App;
