import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AuthorsPage = () => {
  return (
    <>
      <Metadata title="Authors" description="Authors page" />

      <h1>AuthorsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AuthorsPage/AuthorsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>authors</code>, link to me with `
        <Link to={routes.authors()}>Authors</Link>`
      </p>
    </>
  )
}

export default AuthorsPage
