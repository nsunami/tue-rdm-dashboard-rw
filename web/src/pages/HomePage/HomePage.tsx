import { Metadata } from '@redwoodjs/web'

import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'
import LicensesCell from '../../components/LicensesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <section className="grid md:grid-cols-2 md:gap-2 md:px-2">
        <ItemsOverTimeCell timeFrame="year" />
        <LicensesCell />
      </section>
    </>
  )
}

export default HomePage
