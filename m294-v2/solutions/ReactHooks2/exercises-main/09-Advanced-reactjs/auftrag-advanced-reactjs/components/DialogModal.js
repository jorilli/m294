import { useEffect, useRef } from "react"
import styles from "./DialogModal.module.css"

export default function DialogModal({ children, visible, onClose }) {
    const dialogRef = useRef()

    useEffect(() => {
        if (visible) {
            dialogRef.current?.showModal()
            dialogRef.current?.addEventListener("cancel", onClose)
            return () => dialogRef.current?.removeEventListener("cancel", onClose)
        } else {
            dialogRef.current?.close()
        }
    }, [visible])


    return (
        <dialog className={styles.dialogmodal} ref={dialogRef}>
            {children}
            <form method="dialog" onSubmit={onClose}>
                <button type="submit">Ok</button>
            </form>
        </dialog>
    )
}