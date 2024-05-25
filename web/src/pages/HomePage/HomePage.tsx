import { Metadata } from '@redwoodjs/web'

import ItemsCell from '../../components/ItemsCell'
import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'

const ITEM_TYPES = {
  DATASET: '3',
  SOFTWARE: '9',
}

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <ItemsOverTimeCell timeFrame="year" />
      <ItemsCell />
    </>
  )
}

export default HomePage
