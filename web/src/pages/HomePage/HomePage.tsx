import { Metadata } from '@redwoodjs/web'

import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'
import LicensesCell from '../../components/LicensesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <ItemsOverTimeCell timeFrame="year" />
      <LicensesCell />
    </>
  )
}

export default HomePage
