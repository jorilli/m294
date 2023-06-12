import styles from "./button.module.css"
export default function ButtonPage(props){
    return(
        <div>
            <button className={styles[props.variant]}>{props.text}</button>
        </div>
    )
}