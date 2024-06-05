export function removeId(e: any) {
  const { id, ...rest } = e
  return rest
}
