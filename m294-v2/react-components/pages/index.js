import MyComponent from "../components/MyComponent"
import ButtonPage from "../components/ButtonPage";
import Wordreverser from "../components/wordreverser";
import Shoppinglist from "../components/shoppinglist";
import Thumbnail from "../components/thumbnail";

const thumbnail =  {
    title: "Learning react",
    views: 12312313,
    channelName: "1337 Coding Tutorials",
    description: "LIKE AND SUBSCRIBE!",
    img: "https://via.placeholder.com/360x200"
}

export default function IndexPage(){
    return (
        <div>
            <MyComponent/>
            <h1>Buttons</h1>
            <ButtonPage text="Default" variant="default"/>
            <ButtonPage text="Success" variant="success"/>
            <ButtonPage text="Danger" variant="danger"/>
            <ButtonPage text="Warning" variant="warning"/>
            <ButtonPage text="Info" variant="info"/>
            <h1>Wordreverser</h1>
            <Wordreverser word="Lustig"/>
            <h1>Einkaufsliste</h1>
            <Shoppinglist items={[
            { name: "Milk", amount: 2 },
            { name: "Eggs", amount: 6 },
            { name: "Bread", amount: 1 }
                ]}/>
            <h1>Thumbnail</h1>
            <Thumbnail {...thumbnail} />
        </div>
    )
}
