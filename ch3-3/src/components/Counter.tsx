import { memo, useCallback, useState } from "react";

type CountButtonProps = {
    count: number
    onClick: () => void
}
const CountButton: React.FC<CountButtonProps> = ({ count, onClick }) => {
    return <button onClick={onClick}>{count}</button>
};

const MemoizedCountButton = memo(CountButton)

export const Counter = () => {
    const [count1, setCount1] = useState(0)
    const increment1 = () => { setCount1(c => c + 1) }
    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => { setCount2(c => c + 1) }, [])

    return (
        <div>
            <MemoizedCountButton count={count1} onClick={increment1} />
            <MemoizedCountButton count={count2} onClick={increment2} />
        </div>
    );
}