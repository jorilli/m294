import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./Navigation.module.css"

export default function Navigation({ session }) {
    const [isOpen, setIsOpen] = useState(false)
    const user = session.user
    const router = useRouter()

    useEffect(() => setIsOpen(false), [router.pathname])

    return (
        <nav className={styles.navigation}>
            <div onClick={e => setIsOpen(open => !open)}>{isOpen ? "✖" : "☰"}</div>

            <ul className={isOpen ? styles.open : ""}>

                {!user && <li key="login"><Link href="/login">Login</Link></li>}

                {
                    user && <>
                        <li key="create"><Link href="/posts/create">Create new post</Link></li>

                        <li key="name">
                            <Link href="/profile">
                                {user.name}
                            </Link>

                        </li>

                        <li key={user.name}>
                            <a href="#" className={styles.logout} onClick={async (e) => {
                                session.logout()
                                setIsOpen(false)
                                router.push("/")
                            }}>
                                Logout
                            </a>
                        </li>
                    </>
                }

            </ul>
        </nav>
    )
}