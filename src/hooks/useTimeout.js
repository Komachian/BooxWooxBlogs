import { useRef, useEffect } from 'react'

const useTimeout = (callback, timer) => {
  const timeoutIdRef = useRef()

  useEffect(() => {
    timeoutIdRef.current = callback
  }, [callback])

  useEffect(() => {
    const fn = () => {
      timeoutIdRef.current()
    }

    if (timer !== null) {
      const timeoutId = setTimeout(fn, timer)
      return () => clearTimeout(timeoutId)
    }
  }, [timer])
}

export default useTimeout
