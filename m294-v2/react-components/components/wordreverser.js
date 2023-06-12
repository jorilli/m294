export default function Wordreverser({word}){
    return(
        <p>{word.split('').reverse().join('')}</p>
    )
}