//
import styles from './style/layout.module.css'
//
import Left from './layout/Left.jsx'
import Middle from './layout/Middle.jsx'
import Right from './layout/Right.jsx'

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Left/>
                <Middle/>
                <Right/>
            </div>
        </div>
    );
}

export default App;
