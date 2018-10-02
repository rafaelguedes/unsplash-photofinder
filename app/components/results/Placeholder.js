import React from 'react'

export default class Placeholder extends React.Component {

  createPlaceholder = () => {
    let placeholders = []

    for (let i = 0; i <= 9; i++) {
        placeholders.push(
            <figure key={i} className={`results-items results-item-${i + 1}`}></figure> 
        )
    }
    return placeholders;
  }


  render() {
    return(
     this.createPlaceholder()
    )
  }

}