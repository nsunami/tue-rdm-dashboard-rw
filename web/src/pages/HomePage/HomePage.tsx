import { Metadata } from '@redwoodjs/web'

import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <ItemsOverTimeCell timeFrame="year" />
    </>
  )
}

export default HomePage
