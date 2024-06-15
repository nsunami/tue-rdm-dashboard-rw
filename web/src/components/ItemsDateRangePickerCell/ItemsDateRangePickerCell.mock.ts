// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  itemsDateRange: {
    min: '2009-01-01',
    max: '2024-01-01',
  },
  dateRange: {
    from: new Date(),
    to: new Date(),
  },
  setDateRange: () => {},
})
