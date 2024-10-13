import styles from './layout.module.css'
import {observer} from "mobx-react-lite";
import FieldStore from '@store/form/FieldStore.js'
//
import {ProForm, ProFormGroup} from '@ant-design/pro-components';

const App = observer(() => {
    let ActiveComponent = FieldStore.getActiveComponent();
    return (
        <div className={styles.midTop}>
            <ProForm>
                <ProFormGroup>
                    <ActiveComponent/>
                </ProFormGroup>
            </ProForm>
        </div>
    );
})

export default App;
