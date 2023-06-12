import {login} from "@lib/api";
import {useRouter} from "next/router";
import {useState} from "react";
import {useRedirectToHome} from "@lib/session";

const defaultModel = {
    email: "",
    password: ""
}
function validateModel(model) {
    const errors = {
        email: "",
        password: ""
    }
    let isValid = true

    if (model.email.trim().length === 0 || !model.email.includes("@")) {
        errors.email = "Email can't be empty and must be a valid email address"
        isValid = false
    }
    if (model.password.trim().length === 0 || model.password.length < 3) {
        errors.password = "Password can't be empty and must be at least 3 characters long"
        isValid = false
    }
    return {errors, isValid}
}

export default function LoginPage({session}) {
    useRedirectToHome(session)

    const router = useRouter()
    const [errors, setErrors] = useState(defaultModel)
    const [isLoading, setIsLoading] = useState(false)
    const [model, setModel] = useState(defaultModel)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value?.trim()

        setModel({
            ...model,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(model)
        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        try {
            const resp = await login(model)
            session.login(resp)
            router.push("/")
        } catch (e) {
            setErrors({
                ...errors,
                login: "Login failed"
            })
            setIsLoading(false)
        }
    }

    return session.user ? null : (
        <div>
            <h1>Login</h1>
            <p>(adamadmin@blog.ch // admin1234)</p>
            <br/>
            {errors.login && <h2>{errors.log}</h2>}

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={handleChange} value={model.email} autoComplete="email" required/>
                    {errors.email && <div>{errors.email}</div>}
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} value={model.password} autoComplete="current password" required/>
                    {errors.password && <div>{errors.password}</div>}
                </fieldset>
                <fieldset>
                    <button disabled={isLoading} type="submit">{isLoading ? "loading..." : "login"}</button>
                </fieldset>
            </form>
        </div>
    )
}
