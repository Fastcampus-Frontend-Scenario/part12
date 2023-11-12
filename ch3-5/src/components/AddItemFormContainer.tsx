import React, { useState } from 'react'
import { ErrorMessage } from './ErrorMessage'
import { ApiService } from '../service/Api'
import AddItemForm2 from './AddItemForm2'

function AddItemFormContainer() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const addItem = async (item: any) => {
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
            {!isLoading &&(
                <>
                    {error && <ErrorMessage error={error} />}
                    <AddItemForm2 addItem={addItem} />
                </>
            )}
            
        </div>
    )
}

export default AddItemFormContainer