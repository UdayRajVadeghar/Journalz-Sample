import React from 'react'
import Division1 from './components/Division1'
import Division2 from './components/Division2'
import Division3 from './components/Division3'
import Division4 from './components/Division4'
import Division5 from './components/Division5'
import Divisionbetween2and3 from './components/Divisionbetween2and3'
import ImageSection from './components/ImageSection'
import Title from './components/Title'

const App = () => {
  return (
    <div>
      <Title />
      <Division1 />
      <ImageSection />
      <Division2 />
      <Divisionbetween2and3 />
      <Division3 />
      <Division4 />
      <Division5 />
      
    </div>
  )
}

export default App
