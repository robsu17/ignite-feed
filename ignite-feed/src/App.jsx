import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
        </main>
      </div>
    </>
  )
}

export default App
