import styles from "./thumbnail.module.css"

export default function Thumbnail(props){
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img src={props.img}/>
            </div>
            <div className={styles.column}>
                <h3>{props.title}</h3>
                <p>{props.views} - {props.channelName}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}