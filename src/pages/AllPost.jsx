import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'

function AllPost() {
    const posts = useSelector(state => state.posts.allPosts)

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                
                {posts?.length === 0 && (
                    <div className="w-full mt-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-400">
                            Loading...
                        </h1>
                        <p className="text-gray-500 mt-2">Check back later or create a new post!</p>
                    </div>
                )}

                {posts?.map((post) => (
                    <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
                
            </div>
        </Container>
    </div>
  )
}

export default AllPost