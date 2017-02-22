import React, { PureComponent } from 'react'
import PairItem from './PairItem'

class PairsContainer extends PureComponent {
  renderPairs(pair, index) {
    return <PairItem key={index} {...pair} />
  }

 render() {
   return(
     <div className="recipes wrapper">
       <header>
        <h1>Team Up</h1>
       </header>

       <main>
         { this.props.pairs.map(this.renderPairs) }
       </main>
     </div>
   )
 }
}

export default PairsContainer
