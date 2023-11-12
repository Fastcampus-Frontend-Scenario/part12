import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ApiService } from '../service/Api'

const AddItemForm: React.FC = () => {
    const [item, setItem] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await ApiService.SendItem({ item })
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error)
        }
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Add Item:
                    <input type="text" value={item} onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddItemForm