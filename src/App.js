import React from 'react'
import PairsContainer from './pairs/PairsContainer'

const pairs = [
  {
    date: "2017-2-22",
    students: [
      {name: "Stefan Kollaart", email: "stefankollaart@gmail.com", admin: true}
    ]
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <PairsContainer pairs={ pairs } />
      </div>
    )
  }
}

export default App
