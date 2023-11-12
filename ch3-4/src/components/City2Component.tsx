import useDebounce from '@/hooks/useDebounce'
import cities from 'cities-list'
import { ChangeEvent, useEffect, useState } from 'react'

const citiesArray = Object.keys(cities)

export const City2Component = () => {
    const [filtered, setFiltered] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const debouncedValue = useDebounce(inputValue, 500)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }
    useEffect(() => {
        if (!debouncedValue) return setFiltered([])
        setFiltered(citiesArray.filter(
            city => city.toLowerCase().includes(debouncedValue.toLowerCase())
        ))
    }, [debouncedValue])
    
    return (
        <div className="container">
            <h1>Find your favourite cities</h1>

            <form>
                <input
                    placeholder="search here..."
                    onChange={onChange}
                    value={inputValue}
                />
            </form>

            <div>
                {filtered?.map((city, index) => (
                    <p key={index}>{city}</p>
                ))}
            </div>
        </div>
    )
}