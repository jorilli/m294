import CheckboxCounter from '@/components/checkboxcounter/CheckboxCounter'
import SyncedInputs from '@/components/syncedinputs/SyncedInputs'
import Accordion from '@/components/accordion/Accordion'
import FilterableList from '@/components/filterablelist/FilterableList'
import Modal from '@/components/Modal'
import SortableTable from '@/components/sortabletable/SortableTable'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import DialogModal from '@/components/DialogModal'

const foods = [{
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
    id: 1,
    name: 'Dal',
    description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}]

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const [showDialogModal, setShowDialogModal] = useState(false)

    return (
        <div className={styles.container}>
            <h1>Advanced react</h1>

            <h2>SyncedInputs</h2>
            <SyncedInputs value="I love kittens!" />
            <hr />

            <h2>Modal</h2>
            <button onClick={() => setShowModal(b => !b)}>{showModal ? "Hide" : "Show"}</button>

            <Modal visible={showModal} onClose={() => setShowModal(false)}>
                <h2>Hello, I'm a modal!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque, non facere qui quisquam odio
                    reiciendis praesentium voluptatibus. Sint nihil officiis esse earum quaerat voluptatem itaque vero
                    explicabo similique error!</p>
            </Modal>
            <hr />

            <h2>DialogModal</h2>
            <button onClick={() => setShowDialogModal(b => !b)}>{showDialogModal ? "Hide" : "Show"}</button>

            <DialogModal visible={showDialogModal} onClose={(e) => setShowDialogModal(false)}>
                <h1>A title for an dialog modal</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius id ratione fugiat voluptatibus nostrum, voluptatem sunt laborum recusandae iure dolorum veritatis sapiente consequuntur deserunt. Doloremque fugiat dolor numquam mollitia.
                </p>
            </DialogModal>
            <hr />

            <h2>CheckboxCounter</h2>
            <CheckboxCounter />
            <hr />

            <h2>Accordion</h2>
            <Accordion />
            <hr />

            <h2>FilterableList</h2>
            <FilterableList items={foods} />
            <hr />

            <h2>SortableTable</h2>
            <SortableTable />
        </div>
    )
}
