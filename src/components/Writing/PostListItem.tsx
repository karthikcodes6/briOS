import * as React from 'react'

import { ListItem } from '~/components/ListDetail/ListItem'
import { timestampToCleanTime } from '~/lib/transformers'

interface Props {
  post: any
  active: boolean
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt })
  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={post.excerpt}
      byline={post.publishedAt ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
