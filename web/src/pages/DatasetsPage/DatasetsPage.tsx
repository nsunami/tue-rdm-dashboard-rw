import { Metadata } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell'

const DatasetsPage = () => {
  return (
    <>
      <Metadata title="Datasets" description="Datasets page" />

      <h1 className="text-xl">Datasets</h1>
      <ItemsCell />
    </>
  )
}

export default DatasetsPage
