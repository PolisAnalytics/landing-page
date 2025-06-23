import styles from "./button.module.scss";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Button(){   
    return <button className={styles.button} type="submit">
        <MdOutlineKeyboardDoubleArrowRight className={styles.icon}/>
    </button>
}