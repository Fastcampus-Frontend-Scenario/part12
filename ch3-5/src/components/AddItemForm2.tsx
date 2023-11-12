import React, { useState } from 'react'


type Props = {
    addItem: (item: any) => void
}

const AddItemForm2: React.FC<Props> = ({ addItem }) => {
    const [item, setItem] = useState('')

    const handleChange = (event: any) => {
        setItem(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        addItem(item)
        setItem('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Item:
                <input type="text" value={item} onChange={handleChange} />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddItemForm2