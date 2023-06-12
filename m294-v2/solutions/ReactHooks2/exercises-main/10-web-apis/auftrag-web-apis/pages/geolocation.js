import { useEffect, useState } from "react"

export default function Geolocation() {
    const [coords, setCoords] = useState({
        lat: 0,
        long: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCoords({
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            })
        })
    }, [])

    return (
        <div>
            { coords && <pre>{ JSON.stringify(coords, null, 4) }</pre> }
        </div>
    )
}