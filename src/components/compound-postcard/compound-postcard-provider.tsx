import { PropsWithChildren, useCallback, useMemo, useState } from "react"
import { CompoundPostcardContext } from "./compound-postcard-context"

// ----------------------------------------------------------------------

export default function CompoundPostcardProvider({
  children,
}: PropsWithChildren) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 3000)
  }, [])

  // To prevent unnecessary re-renders
  const memoizedValue = useMemo(
    () => ({
      isSubmitting,
      handleSubmit,
    }),
    [isSubmitting, handleSubmit]
  )

  return (
    <CompoundPostcardContext.Provider value={memoizedValue}>
      {children}
    </CompoundPostcardContext.Provider>
  )
}
