import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

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
    <Card>
      <CardHeader>
        <CardTitle>
          <a href={url_public_html} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </CardTitle>
        <CardDescription className="flex flex-row place-content-between">
          <span>{formatDate(published_date)}</span>
          <span>{license.name}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2">{parsedDescription}</p>
      </CardContent>
    </Card>
  )
}

export default Item
