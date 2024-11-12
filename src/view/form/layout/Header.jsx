//
import styles from '../style/layout.module.css'
//
import {Tooltip} from 'antd'
import {BookOutlined} from '@ant-design/icons'

function App() {
    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    Antd Form
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

export default App;
