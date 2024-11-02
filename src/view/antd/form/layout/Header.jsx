import styles from '../layout.module.css'
import {Tooltip} from 'antd'
import {BookOutlined} from '@ant-design/icons'

export default function App() {
    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    Antd ProForm
                </div>
                <div>
                    <Tooltip title="高级表单">
                        <BookOutlined
                            className={styles.icon}
                            onClick={() => {
                                window.open('https://procomponents.ant.design/components/form')
                            }}/>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
