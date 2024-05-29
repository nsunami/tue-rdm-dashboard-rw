import { Metadata } from '@redwoodjs/web'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'

import ItemsOverTimeCell from '../../components/ItemsOverTimeCell'
import ItemsTotalCell from '../../components/ItemsTotalCell'
import LicensesCell from '../../components/LicensesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <section className="grid md:grid-cols-2 md:gap-2 md:px-2">
        <Card>
          <CardHeader>
            <CardTitle>4TU.ResearchData Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            This dashboard shows the metrics for datasets posted on{' '}
            <a
              href="https://data.4tu.nl"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              4TU.ResearchData
            </a>{' '}
            from the TU/e research community.
          </CardContent>
        </Card>
        <ItemsTotalCell />
        <ItemsOverTimeCell timeFrame="year" />
        <LicensesCell />
      </section>
    </>
  )
}

export default HomePage
