import { useState } from 'react'

import { Form, Label, RadioField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import ItemsCell from '../../components/ItemsCell'

const ITEM_TYPES = {
  DATASET: '3',
  SOFTWARE: '9',
}

const HomePage = () => {
  const [type, setType] = useState(ITEM_TYPES.DATASET)
  function onSubmit(data) {
    setType(data.type)
  }
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Form onSubmit={onSubmit}>
        <RadioField name="type" value={ITEM_TYPES.DATASET} />
        <Label name="type" htmlFor={'dataset'}>
          Dataset
        </Label>
        <RadioField name="type" value={ITEM_TYPES.SOFTWARE} />
        <Label name="type" htmlFor="software">
          Software
        </Label>
        <Submit>Go</Submit>
      </Form>
      <ItemsCell type={type.valueOf()} />
    </>
  )
}

export default HomePage
