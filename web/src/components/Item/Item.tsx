const Item = ({ item }) => {
  const { title, description, license, url_public_html, published_date } = item
  const parsedDescription = new DOMParser().parseFromString(
    description,
    'text/html'
  ).body.textContent

  function formatDate(date) {
    return new Intl.DateTimeFormat('sv-SE').format(new Date(date))
  }

  return (
    <div className="my-1 border">
      <h2 className="font-bold">
        <a href={url_public_html} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div>{license.name}</div>
      <div>{formatDate(published_date)}</div>
      <p className="line-clamp-2">{parsedDescription}</p>
    </div>
  )
}

export default Item
