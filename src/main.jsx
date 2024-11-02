//
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
// css reset
import 'normalize.css'
import '@style/index.js'
// main entry
import App from '@view/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
