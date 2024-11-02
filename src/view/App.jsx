//
import {Routes, Route} from "react-router-dom";
// page entry
import ProForm from '@view/antd/form/index.jsx'
import Amis from '@view/amis/index.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProForm/>}/>
            <Route path="/amis" element={<Amis/>}/>
            <Route path="/form" element={<ProForm/>}/>
        </Routes>
    )
}

export default App
