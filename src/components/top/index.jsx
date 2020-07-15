import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="topWrapper">
      <div className="top">
        <Link to={'/about'} className="linkToAbout">
          <span className="about">about</span>
        </Link>
        {!isRoot && (
          <Link to={`/`} className="link">
            {title}
          </Link>
        )}
        <GitHubIcon />
      </div>
    </div>
  )
}
