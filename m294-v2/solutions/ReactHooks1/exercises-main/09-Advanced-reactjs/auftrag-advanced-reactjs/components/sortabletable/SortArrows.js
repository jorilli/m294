export default function SortArrows({ property, onChange }) {
    return (
        <span style={ { cursor: "pointer" } }>
        <span onClick={ (e) => onChange(property, "desc") }>↑</span>
        <span style={ { margin: "0 0.5em" } }></span>
        <span onClick={ (e) => onChange(property, "asc") }>↓</span>
      </span>
    )
}
  