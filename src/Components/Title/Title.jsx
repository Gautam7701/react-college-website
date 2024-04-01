import React from 'react'
import "./Title.css"

const Title = ({subtitle,title}) => {
  return (
    <div className="title">
        <div className="program-title">
            <span className='first'>{subtitle}</span>
            <span className='second'>{title}</span>
        </div>
    </div>
  )
}

export default Title
