import * as React from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { MarkdownRenderer } from '~/components/MarkdownRenderer'
import { timestampToCleanTime } from '~/lib/transformers'

import { PostSEO } from './PostSEO'

export function PostDetail({ slug }) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  // if (loading) {
  //   return <Detail.Loading />
  // }

  // if (false) {
  //   return <Detail.Null />
  // }
  const { post } = {
    post: { title: '34sdfasd', publishedAt: '', text: '23423' },
  }
  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt })
  return (
    <>
      <PostSEO post={post} />
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/writing'}
          magicTitle
          title={post.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <Detail.Title ref={titleRef}>{post.title}</Detail.Title>
            <span
              title={publishedAt.raw}
              className="inline-block leading-snug text-tertiary"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer children={post.text} className="mt-8 prose" />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
