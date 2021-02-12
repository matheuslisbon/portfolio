import React from 'react'

import {Container} from './styles'

export default function Portfolio(props){
  return (
    <Container>
      <a
            target="_black"
            href={props.link}
          >
            <div className="item-grid">
              <h1>{props.title}</h1>
              {props.children}
              <p>{props.description}</p>
            </div>
      </a>      
    </Container>

  )
}
