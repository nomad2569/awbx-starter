import React from 'react'
import './index.scss'

export const PostContainer = ({ html }) => (
  <div className="postContainer" dangerouslySetInnerHTML={{ __html: html }} />
)
