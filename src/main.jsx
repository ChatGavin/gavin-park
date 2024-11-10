//
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
// css reset
import 'normalize.css'
import '@style/index.js'
// main entry
import App from '@view/App.jsx'

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
