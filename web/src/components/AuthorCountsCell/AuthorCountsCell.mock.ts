// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  authorCounts: [
    {
      author_id: 1,
      orcid: '0000-0000-0000-0000',
      full_name: 'Test Author 1',
      count: 999,
    },
    {
      author_id: 2,
      orcid: '0000-0000-0000-0002',
      full_name: 'Test Author 2',
      count: 888,
    },
  ],
})
