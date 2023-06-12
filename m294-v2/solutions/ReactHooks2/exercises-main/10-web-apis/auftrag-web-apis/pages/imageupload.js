import styles from './imageupload.module.css'
import Link from "next/link"
import { useRef, useState } from "react"

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

export default function ImageUpload() {
    const [base64Image, setBase64Image] = useState("")
    const [imagePath, setImagePath] = useState("")

    const fileInput = useRef(null)

    const onFileInputChange = async (e) => {
        const file = fileInput.current.files[0]
        if (!file) return
        const base64 = await toBase64(file)
        setBase64Image(base64)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!base64Image) return

        const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                base64Image
            })
        })

        const data = await response.json()
        setImagePath(data.filePath)
    }


    return (
        <div className={styles.imageupload}>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept=".png,.jpg"
                    ref={fileInput}
                    onChange={onFileInputChange}
                />
                <button type="submit">Submit</button>
            </form>

            {base64Image && <img src={base64Image} style={{ width: "300px", height: "auto" }}/>}

            {imagePath && <p>
                <Link href={`http://localhost:3000${imagePath}`} passHref>
                    <a>http://localhost:3000{imagePath}</a>
                </Link>
            </p>}
        </div>
    )
}