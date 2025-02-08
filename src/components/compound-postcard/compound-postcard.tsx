import { useState } from "react"
import { IMAGES_URL } from "../../constant/image-url"
import { useCompoundPostcard } from "./compound-postcard-context"
import CompoundPostcardProvider from "./compound-postcard-provider"

// ----------------------------------------------------------------------

type CompoundPostcardProps = {
  children: React.ReactNode
  hideTitle?: boolean
}

// ----------------------------------------------------------------------

export default function CompoundPostcard({ children }: CompoundPostcardProps) {
  return (
    <CompoundPostcardProvider>
      <div className="postcard">
        <div className="postcard-header">POSTCARD</div>
        <div className="postcard-body">{children}</div>
      </div>
    </CompoundPostcardProvider>
  )
}

// ----------------------------------------------------------------------

CompoundPostcard.Submit = function CompoundPostcardSubmit() {
  const { isSubmitting, handleSubmit } = useCompoundPostcard()

  if (isSubmitting) {
    return (
      <button className="postcard-send buttonload">
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </button>
    )
  }

  return (
    <button className="postcard-send" onClick={handleSubmit}>
      Send
    </button>
  )
}

CompoundPostcard.Image = function CompoundPostcardImage() {
  const { isSubmitting } = useCompoundPostcard()

  const [imageIndex, setImageIndex] = useState(0)

  function onClickImage() {
    if (isSubmitting) return
    setImageIndex((prev) => (prev + 1) % IMAGES_URL.length)
  }

  return (
    <img
      src={`/img-${imageIndex}.jpg`}
      alt="image"
      className="postcard-image"
      style={{
        cursor: isSubmitting ? "not-allowed" : "pointer",
        opacity: isSubmitting ? 0.9 : 1,
      }}
      onClick={onClickImage}
    ></img>
  )
}

CompoundPostcard.Address = function CompoundPostcardAddress() {
  return (
    <div className="postcard-address">
      <div className="stamp"></div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="lines"></div>
      ))}
    </div>
  )
}
