import styles from './layout.module.css'
import {Tooltip} from 'antd'
import {AntDesignOutlined, GithubOutlined} from '@ant-design/icons'

export default function App() {
    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    Antd ProForm
                </div>
                <div>
                    <Tooltip title="Ant Design">
                        <AntDesignOutlined
                            className={styles.icon}
                            style={{marginRight: '5px', color: '#1890ff'}}
                            onClick={() => {
                                window.open('https://procomponents.ant.design/components')
                            }}/>
                    </Tooltip>
                    <Tooltip title="Github">
                        <GithubOutlined
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
