import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

const PRIVACY_POLICY_COOKIE = "privacy-policy-accepted"

export default function CookiesPage() {
    const router = useRouter()
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)

    useEffect(() => {
        const hasAccepted = Cookies.get(PRIVACY_POLICY_COOKIE)
        if(!hasAccepted) {
            const answer = confirm("Privacy Policy: This site uses cookies.")
            if(answer) {
                Cookies.set(PRIVACY_POLICY_COOKIE, true)
                setPrivacyPolicyAccepted(true)
            } else {
                setPrivacyPolicyAccepted(false)
            }
        }
    }, [])

    return (
        <div>
            <h1>Cookies</h1>
            <p>Private policy accepted: {privacyPolicyAccepted ? "true" : "false"}</p>
            <button onClick={e => {
                Cookies.remove(PRIVACY_POLICY_COOKIE)
                setPrivacyPolicyAccepted(false)
                router.reload()
            }}>delete cookie</button>
        </div>
    )
}