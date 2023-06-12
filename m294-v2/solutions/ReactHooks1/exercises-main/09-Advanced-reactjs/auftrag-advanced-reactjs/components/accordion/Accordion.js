import Panel from "components/accordion/Panel"
import styles from "components/accordion/Accordion.module.css"
import { useState } from "react"

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={ styles.accordion }>
            <Panel title="Dark" isOpen={ activeIndex === 0 } onShow={ () => setActiveIndex(0) }>
                <p>
                    A family saga with a supernatural twist, set in a German town, where the disappearance of two young
                    children exposes the relationships among four familie
                </p>
            </Panel>

            <Panel title="Primer" isOpen={ activeIndex === 1 } onShow={ () => setActiveIndex(1) }>
                <p>
                    Four friends/fledgling entrepreneurs, knowing that there's something bigger and more innovative than
                    the different error-checking devices they've built, wrestle over their new invention.
                </p>
            </Panel>

            <Panel title="Back To The Future" isOpen={ activeIndex === 2 } onShow={ () => setActiveIndex(2) }>
                <p>
                    Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a
                    time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.
                </p>
            </Panel>
        </div>
    )
}