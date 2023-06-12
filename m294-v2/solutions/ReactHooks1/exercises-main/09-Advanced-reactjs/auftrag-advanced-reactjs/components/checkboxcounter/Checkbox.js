export default function Checkbox({ label, name, checked, onChange }) {
    return (
        <label>
            { label }
            <input
                type="checkbox"
                name={ name }
                checked={ checked }
                onChange={ onChange }
            />
        </label>
    )
}