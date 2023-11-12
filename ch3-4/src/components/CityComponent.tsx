import cities from 'cities-list'
import { ChangeEvent, useState } from 'react'

const citiesArray = Object.keys(cities)

export const CityComponent = () => {
    const [filtered, setFiltered] = useState<string[]>([])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!value) return setFiltered([])
        setFiltered(citiesArray.filter(
            city => city.toLowerCase().includes(value.toLowerCase())
        ))
    }


    return (
        <div className="container">
            <h1>Find your favourite cities</h1>

            <form>
                <input
                    placeholder="search here..."
                    onChange={onChange}
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