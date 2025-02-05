import { useState } from "react"
import { IMAGES_URL } from "../../constant/image-url"
import {
  CompoundPostcardContext,
  useCompoundPostcard,
} from "./compound-postcard-context"

// ----------------------------------------------------------------------

type CompoundPostcardProps = {
  children: React.ReactNode
  hideTitle?: boolean
}

// ----------------------------------------------------------------------

export default function CompoundPostcard({
  children,
  hideTitle,
}: CompoundPostcardProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageIndex, setImageIndex] = useState(1)

  const handleClickImage = () => {
    if (isSubmitting) return
    setImageIndex((imageIndex + 1) % (IMAGES_URL.length + 1) || 1)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <CompoundPostcardContext.Provider
      value={{ isSubmitting, handleClickImage, handleSubmit }}
    >
      <div className="postcard">
        {!hideTitle && <div className="postcard-header">POSTCARD</div>}
        <div className="postcard-body">{children}</div>
      </div>
    </CompoundPostcardContext.Provider>
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

  const [imageIndex, setImageIndex] = useState(1)

  function onClickImage() {
    if (isSubmitting) return
    setImageIndex((imageIndex + 1) % (IMAGES_URL.length + 1) || 1)
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
