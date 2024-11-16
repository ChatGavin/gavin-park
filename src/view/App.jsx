//
import {Routes, Route, Outlet} from "react-router-dom";
// pages routes
import Header from '@component/layout/Header.jsx'
import Home from '@view/home/index.jsx'
import Form from '@view/form/index.jsx'
import NotFound from '@view/error/NotFound.jsx'
// has common layout
const WithLayout = () => {
    return (
        <div className='container'>
            <Header/>
            <Outlet className='main'/>
        </div>
    )
}
// without layout
const WithoutLayout = () => {
    return (
        <div className='container'>
            <Outlet/>
        </div>
    )
}

function App() {
    return (
        <Routes>
            {/*use Outlet to render children routes*/}
            <Route element={<WithLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
            </Route>
            {/*custom pages*/}
            <Route element={<WithoutLayout/>}>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
