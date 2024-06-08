import { PawPrint } from 'lucide-react'

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-8 text-muted-foreground">No Data Found</div>
      <div>
        <PawPrint className="text-muted-foreground" height={200} width={200} />
      </div>
    </div>
  )
}

export default NoDataFound
