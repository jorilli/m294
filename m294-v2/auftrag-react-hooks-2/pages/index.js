import ColoredCounter from "../components/coloredCounter";
import CountdownTimer from "../components/countdownTimer";
import HogwartsHouse from "../components/hogwartsHouse";
import Jokes from "../components/jokes";
import SearchList from "../components/SearchList";

export default function IndexPage() {
    return (
        <>
            <ColoredCounter/>
            <CountdownTimer/>
            <Jokes/>
            <SearchList names={["Jori", "James", "Sirius", "Charlie", "Tonks "]}/>
            <br/>
            <br/>
            <HogwartsHouse name="Gryffindor"/>
            <HogwartsHouse name="Slytherin"/>
            <HogwartsHouse name="Ravenclaw"/>
            <HogwartsHouse name="Hufflepuff"/>

        </>
    )
}
