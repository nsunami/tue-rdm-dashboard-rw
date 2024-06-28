import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'
import {
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <header className="my-2 flex w-full flex-row items-center">
        <h1 className="mx-1 font-bold">
          <Link to={routes.home()}>4TU.RD - TU/e Dashboard</Link>
        </h1>
        <NavigationMenu className="ml-4">
          <NavigationMenuList>
            <Link to={routes.home()}>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuItem>
            </Link>
            <Link to={routes.datasets()}>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                Datasets
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default DefaultLayout
