//
import styles from './style/layout.module.css'
//
import Header from './layout/Header.jsx'
import Left from './layout/Left.jsx'
import Middle from './layout/Middle.jsx'
import Right from './layout/Right.jsx'

function App() {
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

export default App;
