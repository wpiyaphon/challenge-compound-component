export function SimplePostcardSubmit({
  isSubmitting,
  onClickSubmit,
}: {
  isSubmitting: boolean
  onClickSubmit: () => void
}) {
  if (isSubmitting) {
    return (
      <button className="postcard-send buttonload">
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </button>
    )
  }
  return (
    <button className="postcard-send" onClick={onClickSubmit}>
      Send
    </button>
  )
}
