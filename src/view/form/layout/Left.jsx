import styles from '../style/layout.module.css'
//
import {observer} from "mobx-react-lite";
import FieldStore from '@store/antd/form/FieldStore.js'
//
import {Tabs} from 'antd';
import {CheckCard} from '@ant-design/pro-components';

const App = observer(() => {
    const MyTab = [
        {
            key: 'form',
            label: '表单',
            children:
                <CheckCard.Group size="small" className={styles.CheckCardGroup}
                                 onChange={(value) => {
                                     FieldStore.setActive(value);
                                 }}
                                 defaultValue="ProFormText"
                >
                    {
                        FieldStore.getFields().map(item => {
                            return (
                                <CheckCard className={styles.CheckCardItem} key={item.name} title={item.name}
                                           description={item.desc} value={item.name}/>
                            )
                        })
                    }
                </CheckCard.Group>
        },
        {
            key: 'component',
            label: '表单项',
            children:
                <CheckCard.Group size="small" className={styles.CheckCardGroup}
                                 onChange={(value) => {
                                     FieldStore.setActive(value);
                                 }}
                                 defaultValue="ProFormText"
                >
                    {
                        FieldStore.getFields().map(item => {
                            return (
                                <CheckCard className={styles.CheckCardItem} key={item.name} title={item.name}
                                           description={item.desc} value={item.name}/>
                            )
                        })
                    }
                </CheckCard.Group>
        },
    ];
    return (
        <div className={styles.left}>
            <Tabs size='small' tabBarGutter={0} items={MyTab}/>
        </div>
    );
})

export default App;
