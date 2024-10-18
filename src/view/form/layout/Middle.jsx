import styles from '../layout.module.css'
import MidTop from './MidTop.jsx'
import MidBottom from './MidBottom.jsx'

export default function App() {
    return (
        <div className={styles.middle}>
            <MidTop/>
            <MidBottom/>
        </div>
    );
}
