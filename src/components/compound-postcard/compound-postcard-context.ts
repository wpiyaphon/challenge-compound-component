import { createContext, useContext } from "react"

// ----------------------------------------------------------------------

type CompoundPostcardContextType = {
  isSubmitting: boolean
  handleSubmit: () => void
}

// ----------------------------------------------------------------------

const CompoundPostcardContext =
  createContext<CompoundPostcardContextType | null>(null)

export const useCompoundPostcard = () => {
  const compoundPostcardContext = useContext(CompoundPostcardContext)

  if (!compoundPostcardContext) {
    throw new Error(
      "useCompoundPostcard has to be used within <CompoundPostcardContext.Provider>"
    )
  }

  return compoundPostcardContext
}
