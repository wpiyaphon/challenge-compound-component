import { useState } from "react"
import { IMAGES_URL } from "../../constant/image-url"

export function SimplePostcardImage({
  isSubmitting,
}: {
  isSubmitting: boolean
}) {
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
