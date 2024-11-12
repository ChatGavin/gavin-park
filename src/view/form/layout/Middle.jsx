//
import styles from '../style/layout.module.css'
//
import MidTop from './MidTop.jsx'
import MidBottom from './MidBottom.jsx'

function App() {
    return (
        <div className={styles.middle}>
            <MidTop/>
            <MidBottom/>
        </div>
    );
}

export default App;
