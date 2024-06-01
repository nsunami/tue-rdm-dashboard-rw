export function formatToYYYY(date: string) {
  return Intl.DateTimeFormat('en-US', { year: 'numeric' })
    .format(new Date(date))
    .toString()
}
