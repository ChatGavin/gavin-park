//
import styles from './header.module.css'
//
import SvgIcon from '@component/icon/index.jsx'

function App() {
    // click icon to
    const handleClickIcon = (name = '') => {
        if (!name) return;
        if (name === 'github') {
            window.open('https://github.com/linidea/antd-visual');
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <SvgIcon name='antd'/>
                    <div className={styles.title}>Antd Visual</div>
                </div>
                <div className={styles['icon-box']}>
                    <div className={styles.icon}
                         onClick={() => {
                             handleClickIcon('fileSearch')
                         }}>
                        <SvgIcon name='fileSearch' size={20}/>
                    </div>
                    <div className={styles.icon}
                         onClick={() => {
                             handleClickIcon('book')
                         }}>
                        <SvgIcon name='book' size={20}/>
                    </div>
                    <div className={styles.icon}
                         onClick={() => {
                             handleClickIcon('github')
                         }}>
                        <SvgIcon name='github' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
