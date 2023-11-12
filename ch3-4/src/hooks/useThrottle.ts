import { useState, useRef, useEffect } from "react"

export const useThrottle = <T>(value: T, ms: number = 200) => {
  const [state, setState] = useState<T>(value)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const nextValue = useRef(null) as any
  const hasNextValue = useRef(0) as any

  useEffect(() => {
    if (!timeout.current) {
      setState(value)
      const callback = () => {
        if (hasNextValue.current) {
          hasNextValue.current = false
          setState(nextValue.current)
          timeout.current = setTimeout(callback, ms)
        } else {
          timeout.current = undefined
        }
      }
      timeout.current = setTimeout(callback, ms)
    } else {
      nextValue.current = value
      hasNextValue.current = true
    }
  }, [value, ms])

  // clear timeout if unmounted
  useEffect(() => {
    return () => {
        timeout.current && clearTimeout(timeout.current)
    }
  }, [])

  return state
}
