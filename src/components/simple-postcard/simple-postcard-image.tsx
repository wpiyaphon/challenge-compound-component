import { useState } from "react"

export function SimplePostcardImage({
  isSubmitting,
}: {
  isSubmitting: boolean
}) {
  const [imageIndex, setImageIndex] = useState(0)

  const imagesLength = 4

  function onClickImage() {
    if (isSubmitting) return
    setImageIndex((prev) => (prev + 1) % imagesLength)
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
