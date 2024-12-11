//
import styles from './header.module.css'
//
import {useState} from "react";
//
import {Drawer} from 'antd'
import SvgIcon from '@component/icon/index.jsx'
import Bookmark from './Bookmark.jsx'

function App() {
    // icon list
    const Icons = [
        {name: 'fileSearch'},
        {name: 'book'},
        {name: 'github'}
    ];
    // click icon to
    const [open, setOpen] = useState(false);
    const handleClickIcon = (name = '') => {
        if (!name) return;
        if (name === 'github') {
            window.open('https://github.com/linidea/antd-visual');
        }
        if (name === 'book') {
            setOpen(true);
        }
    }

    return (
        <div className={styles.header}>
            <Drawer
                placement='top'
                open={open}
                closable={false}
                maskClosable={true}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <Bookmark/>
            </Drawer>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <SvgIcon name='antd'/>
                    <div className={styles.title}>Antd Visual</div>
                </div>
                <div className={styles['icon-box']}>
                    {Icons.map((item, index) => {
                        return (
                            <div key={index} className={styles.icon}
                                 onClick={() => {
                                     handleClickIcon(item.name)
                                 }}>
                                <SvgIcon name={item.name} size={20}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
