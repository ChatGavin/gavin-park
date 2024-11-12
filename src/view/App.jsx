//
import {Routes, Route} from "react-router-dom";
// page entry
import Home from '@view/home/index.jsx'
import AntdForm from '@view/form/index.jsx'
import NotFound from '@view/error/NotFound.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/antd-form" element={<AntdForm/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
