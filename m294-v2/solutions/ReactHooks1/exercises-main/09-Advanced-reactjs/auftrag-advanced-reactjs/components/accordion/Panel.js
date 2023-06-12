import styles from "components/accordion/Panel.module.css"

export default function Panel({ isOpen, title, onShow, children }) {
    return (
        <div className={ styles.panel }>
            <h3>{ title }</h3>
            { isOpen && children }
            { !isOpen && <button onClick={ onShow }>Show</button> }
        </div>
    )
}