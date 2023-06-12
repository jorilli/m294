import styles from "./Modal.module.css"

export default function Modal({ visible, onClose, children }) {
    return (
        <div className={ `${ styles.modal } ${ visible ? styles.visible : "" }` }>
            { children }
            <button onClick={ onClose }>Close</button>
        </div>
    )
}
