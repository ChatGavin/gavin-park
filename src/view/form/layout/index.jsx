import styles from './layout.module.css'
import Header from './Header.jsx'
import Left from './Left.jsx'

export default function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <Left/>
            </div>
        </div>
    );
}
