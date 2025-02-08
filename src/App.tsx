import { useState } from "react"
import { SimplePostcardSubmit } from "./components/simple-postcard/simple-postcard-submit"
import { SimplePostcardImage } from "./components/simple-postcard/simple-postcard-image"
import { SimplePostcardAddress } from "./components/simple-postcard/simple-postcard-address"

import "./App.css"
import CompoundPostcard from "./components/compound-postcard/compound-postcard"

// ----------------------------------------------------------------------

function App() {
  // These state and function are used for the simple postcard
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit() {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <>
      {/* -- Simple Postcard -- */}
      <h2>Simple Component</h2>
      <div className="postcard">
        <div className="postcard-header">POSTCARD</div>
        <div className="postcard-body">
          <SimplePostcardImage isSubmitting={isSubmitting} />
          <SimplePostcardAddress />
          <SimplePostcardSubmit
            isSubmitting={isSubmitting}
            onClickSubmit={handleSubmit}
          />
        </div>
      </div>

      {/* -- Compound Postcard -- */}
      <h2>Compound Component</h2>
      <CompoundPostcard>
        <CompoundPostcard.Image />
        <CompoundPostcard.Address />
        <CompoundPostcard.Submit />
      </CompoundPostcard>
    </>
  )
}

export default App
