// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  licenseCounts: [
    {
      __typename: 'LicenseCount',
      name: '4TU General Terms of Use',
      count: 105,
      prop: 0.3633217993079585,
      value: 98,
    },
    {
      __typename: 'LicenseCount',
      name: 'CC BY 4.0',
      count: 54,
      prop: 0.18685121107266436,
      value: 1,
    },
  ],
})
