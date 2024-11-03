//
import {Routes, Route} from "react-router-dom";
// page entry
import AmisEditor from '@view/amis/index.jsx'
import AntdForm from '@view/antd/form/index.jsx'
import NotFound from '@view/error/NotFound.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<AmisEditor/>}/>
            <Route path="/amis-editor" element={<AmisEditor/>}/>
            <Route path="/antd-form" element={<AntdForm/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
