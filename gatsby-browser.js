/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Layout from './src/components/Layout'
import { OrderProvider } from './src/components/OrderContext'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>
}
