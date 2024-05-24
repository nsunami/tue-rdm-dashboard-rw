const Item = ({ item }) => {
  const { title, description, license, url_public_html, published_date } = item
  const parsedDescription = new DOMParser().parseFromString(
    description,
    'text/html'
  ).body.textContent

  return (
    <div>
      <h2>
        <a href={url_public_html} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div>{license.name}</div>
      <div>{published_date}</div>
      <p>{parsedDescription}</p>
    </div>
  )
}

export default Item
