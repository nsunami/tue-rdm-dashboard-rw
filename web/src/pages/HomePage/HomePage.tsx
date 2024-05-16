import { Form, Label, RadioField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  function onSubmit(data) {
    console.log(data)
    return null
  }
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Form onSubmit={onSubmit}>
        <RadioField name="type" value="dataset" />
        <Label name="type" htmlFor="dataset">
          Dataset
        </Label>
        <RadioField name="type" value="software" />
        <Label name="type" htmlFor="software">
          Software
        </Label>
        <Submit>Go</Submit>
      </Form>
    </>
  )
}

export default HomePage
