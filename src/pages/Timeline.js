import React from 'react'
import Time from './Time'

function Timeline () {
  const [posts, setPosts] = ([
    {
      username: "ian_mn",
      caption: 'that`s very nice',
      imageUrl: " https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ])
  return (
    <>
    <Time />
    <div className='tline'>
        {((post) => (
          <Timeline
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
    </div>
    </>
  )
}

export default Timeline
