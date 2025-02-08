import { useState } from "react"
import { IMAGES_URL } from "../../constant/image-url"

export function SimplePostcardImage({
  isSubmitting,
}: {
  isSubmitting: boolean
}) {
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
