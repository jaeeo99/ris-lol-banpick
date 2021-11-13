import React, { ReactNode } from 'react'
import Head from 'next/head'
import {LayoutContext} from '../context'

type Props = {
  children?: ReactNode
  title?: string
}

const layoutConfig = {
  width: 1200,
  height: 800
}

const Layout = ({ children, title = 'Hello World' }: Props) => {
  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutContext.Provider value={layoutConfig}>
      {children}
    </LayoutContext.Provider>
  </div>
}

export default Layout
