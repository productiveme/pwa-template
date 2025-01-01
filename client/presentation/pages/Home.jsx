import { useQuery } from '@urql/preact'

const POSTS_QUERY = `
  query GetPosts {
    posts {
      id
      title
    }
  }
`

export const Home = () => {
  const [result] = useQuery({ query: POSTS_QUERY })
  const { data, fetching, error } = result

  if (fetching) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div class="space-y-4">
      {data?.posts?.map(post => (
        <div key={post.id} class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-xl font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  )
}
