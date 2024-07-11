import type { Item } from 'types/graphql'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const Item = ({ item }: { item: Item }) => {
  const {
    title,
    description,
    license,
    url_public_html,
    published_date,
    authors,
  } = item
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
          <a
            href={url_public_html}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-3"
          >
            {title}
          </a>
        </CardTitle>
        <CardDescription className="flex flex-col place-content-between">
          <div className="flex flex-row place-content-between">
            <span>{formatDate(published_date)}</span>
            <span>{license.name}</span>
          </div>
          <div>
            {authors.map((author) => (
              <span
                key={author.id}
                className={`
                after:content-[',_']
                last:after:content-none
                only-of-type:after:content-none
                [&:nth-last-child(2)]:after:content-[",_&_"]
                first-of-type:[&:nth-last-of-type(2)]:after:content-["_&_"]
                `}
              >
                <a href={`${author.uuid}}`} className="hover:underline">
                  {author.full_name}
                </a>
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2">{parsedDescription}</p>
      </CardContent>
    </Card>
  )
}

export default Item
