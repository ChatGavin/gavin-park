import styles from '../layout.module.css'
import Header from './Header.jsx'
import Left from './Left.jsx'
import Middle from './Middle.jsx'
import Right from './Right.jsx'

export default function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <Left/>
                <Middle/>
                <Right/>
            </div>
        </div>
    );
}
