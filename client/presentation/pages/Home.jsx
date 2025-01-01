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

  if (fetching) return <div className="text-text">Loading...</div>
  if (error) return <div className="text-red-500">Error: {error.message}</div>

  return (
    <div className="space-y-4">
      {data?.posts?.map(post => (
        <div key={post.id} className="card">
          <h2 className="text-xl font-bold text-text">{post.title}</h2>
        </div>
      ))}
    </div>
  )
}
