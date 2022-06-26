import React from 'react'
import { Helmet } from 'react-helmet-async'

type PageContainerProps = {
  title: string
  children: React.ReactNode
}

export const PageContainer = (props: PageContainerProps) => {
  const { title, children } = props
  return (
    <>
      <Helmet>
        <title>
          {title
            ? `${title} | `
            : ''
          }
          GSchool
        </title>
      </Helmet>
      {children}
    </>
  )
}
