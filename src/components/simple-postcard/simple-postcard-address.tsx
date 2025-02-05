export function SimplePostcardAddress() {
  return (
    <div className="postcard-address">
      <div className="stamp"></div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="lines"></div>
      ))}
    </div>
  )
}
