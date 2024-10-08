import styles from './layout.module.css'
import {observer} from "mobx-react-lite";
import FieldStore from '@store/form/FieldStore.js'
//
import {CheckCard} from '@ant-design/pro-components';

const App = observer(() => {
    return (
        <div className={styles.left}>
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
        </div>
    );
})

export default App;
