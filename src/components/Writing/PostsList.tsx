import { useRouter } from 'next/router'
import * as React from 'react'

import { ListContainer } from '~/components/ListDetail/ListContainer'

import { LoadingSpinner } from '../LoadingSpinner'
import { PostListItem } from './PostListItem'
import { WritingTitlebar } from './WritingTitlebar'

export const WritingContext = React.createContext({
  filter: 'published',
  setFilter: (filter: string) => {},
})

export function PostsList() {
  const router = useRouter()
  const [filter, setFilter] = React.useState('published')
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  const defaultContextValue = {
    filter,
    setFilter,
  }

  return (
    <WritingContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />

        <div className="lg:p-3 lg:space-y-1">
          {[{ id: '234', slug: '33-34sdfdsf' }].map((post) => {
            const active = router.query?.slug === post.slug

            return <PostListItem key={post.id} post={post} active={active} />
          })}
        </div>
      </ListContainer>
    </WritingContext.Provider>
  )
}
