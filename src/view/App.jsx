//
import {Routes, Route} from "react-router-dom";
// page entry
import AntdForm from '@view/antd/form/index.jsx'
import NotFound from '@view/error/NotFound.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<AntdForm/>}/>
            <Route path="/antd-form" element={<AntdForm/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
