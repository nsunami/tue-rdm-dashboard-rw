import { Link, routes } from '@redwoodjs/router'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <header className="mx-1 my-2 flex w-full flex-row">
        <h1 className="font-bold">4TU.RD - TU/e Dashboard</h1>
        <nav className="ml-2">
          <ul className="flex flex-row justify-evenly gap-2">
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.datasets()}>Datasets</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default DefaultLayout
