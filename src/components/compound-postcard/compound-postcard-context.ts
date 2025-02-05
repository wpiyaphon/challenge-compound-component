import { createContext, useContext } from "react"

// ----------------------------------------------------------------------

type CompoundPostcardContextType = {
  isSubmitting: boolean
  handleClickImage: () => void
  handleSubmit: () => void
}

// ----------------------------------------------------------------------

export const CompoundPostcardContext =
  createContext<CompoundPostcardContextType | null>(null)

export const useCompoundPostcard = () => {
  const compoundPostcardContext = useContext(CompoundPostcardContext)

  if (!compoundPostcardContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    )
  }

  return compoundPostcardContext
}
