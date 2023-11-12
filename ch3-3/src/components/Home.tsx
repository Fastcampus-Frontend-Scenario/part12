import { memo, useMemo, useState } from "react"
import { Button } from "./Button"

const MemoizedButton2 = memo(Button)
export const Home = () => {
    const [name, setName] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    // const MemoButton = useMemo(() => <Button />, [])
    return (
        <div>
            <input type="text" value={name} onChange={onChange} />
            <div>{name}</div>
            <MemoizedButton2 />
        </div>
    )
}

