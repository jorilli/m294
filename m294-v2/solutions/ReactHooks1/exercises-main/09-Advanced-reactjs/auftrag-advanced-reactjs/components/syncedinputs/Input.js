export default function Input({ label, value, onChange }) {
    return (
        <label>
            { label }
            <input type="text" onChange={ onChange } value={ value }/>
        </label>
    )
}