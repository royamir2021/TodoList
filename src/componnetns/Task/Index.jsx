import styles from './tasks.module.css';
 export function Task(){
    return(   <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>create tasks</p>
                <span>10</span>
            </div>
            <div>
                <p>Completed tasks</p>
                <span>1 to 10</span>
            </div>
        </header>
    </section>)
 
 }