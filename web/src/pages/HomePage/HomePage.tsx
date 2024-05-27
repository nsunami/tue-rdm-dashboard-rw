import { Metadata } from '@redwoodjs/web'

import ItemsCell from '../../components/ItemsCell'
import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'
import LicensesCell from '../../components/LicensesCell'
const ITEM_TYPES = {
  DATASET: '3',
  SOFTWARE: '9',
}

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <ItemsOverTimeCell timeFrame="year" />
      <LicensesCell />
      <ItemsCell />
    </>
  )
}

export default HomePage
