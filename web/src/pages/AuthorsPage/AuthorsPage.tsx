import { Metadata } from '@redwoodjs/web'

import AuthorLeaderboardCard from 'src/components/AuthorLeaderboardCard/AuthorLeaderboardCard'
const AuthorsPage = () => {
  return (
    <>
      <Metadata title="Authors" description="Authors page" />

      <AuthorLeaderboardCard />
    </>
  )
}

export default AuthorsPage
