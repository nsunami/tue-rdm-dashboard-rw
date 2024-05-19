import { fetch } from '@whatwg-node/fetch'

export async function getItems({ type }) {
  console.log('type is', type)
  const response = await fetch(
    `https://data.4tu.nl/v3/datasets?group_ids=28589,28631&order=published_date&order_direction=desc&item_type=${type}&limit=400`
  )
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  console.log('-------- GETTING JSON ------------')
  console.log(response.data)
  const json = [{}]

  return json.forEach((e) => {
    return {
      id: e?.id,
      uuid: e.uuid,
      title: e.title,
      doi: e.doi,
      itemUrl: e.url,
      publishedOn: e.published_date,
      type: e.defined_type,
      typeName: e.defined_type_name,
      groupId: e.group_id,
      webUrl: e.url,
      postedOn: e.timeline.posted,
      firstOnlineOn: e.timeline.firstOnline,
      revisedOn: e.timeline.revision,
      resourceTitle: e.resource_title,
      resourceDoi: e.resource_doi,
    }
  })
}
