import React from "react"
import Layout from "../components/Layout"

import Hello from "../components/Hello"
import PostList from "../components/PostsList"

import "../styles/main.scss"

export default () => {
  return (
    <Layout>
      <Hello />
      <h2>Entradas del blog</h2>
      <PostList length="5" type="blog" />
      <h2>Luétigas</h2>
      <PostList length="5" type="luetiga" />
    </Layout>
  )
}
