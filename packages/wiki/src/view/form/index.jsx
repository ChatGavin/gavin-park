//
import styles from './style/index.module.css'
//
import Left from './layout/Left.jsx'
import MidTop from './layout/MidTop.jsx'
import MidBottom from './layout/MidBottom.jsx'
import Right from './layout/Right.jsx'

function App() {
    return (
        <div className={styles.main}>
            <Left/>
            <div className={styles.middle}>
                <MidTop/>
                <MidBottom/>
            </div>
            <Right/>
        </div>
    );
}

export default App;
