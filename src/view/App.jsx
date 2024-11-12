//
import {Routes, Route} from "react-router-dom";
// pages routes
import Home from '@view/home/index.jsx'
import Form from '@view/form/index.jsx'
import NotFound from '@view/error/NotFound.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
