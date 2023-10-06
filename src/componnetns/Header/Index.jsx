import todologo from '../../assets/Logo.svg';
import styles from './header.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
export function Header() {
    return ( 
        <header className={styles.header} >
        <img src={todologo}/>
        <form className={styles.newTaskForm}>
            <input placeholder='add a new task' type='text'></input>
            <button>
                Create
               <AiOutlinePlusCircle size={20} />
                </button>
        </form>
        </header> 
         )
}