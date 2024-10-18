import {observer} from "mobx-react-lite";
import FieldStore from '@store/form/FieldStore.js'
//
import {Form} from 'antd';

const App = observer(() => {
    let ActiveComponent = FieldStore.getActiveComponent();
    return (
        <Form>
            <ActiveComponent/>
        </Form>
    );
})

export default App;
