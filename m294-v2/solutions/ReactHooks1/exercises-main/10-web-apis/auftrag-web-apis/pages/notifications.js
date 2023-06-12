import { useEffect, useState } from "react"

export default function Notifications() {
    const [permission, setPermission] = useState("")

    useEffect(() => {
        const requestPermission = async () => {
            const result = await Notification.requestPermission()
            setPermission(result)

            if (result === "granted") {
                const notification = new Notification(
                    "Hello there!"
                )
            }
        }
        requestPermission()
    }, [])


    return (
        <div>
            Permission: { permission }
        </div>
    )
}