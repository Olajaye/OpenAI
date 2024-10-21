import Answer from './Components/Answer'
import Card from './Components/Card'
import { ChatGPTItems } from './Components/Card/constant'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <>
     <Header/>
     <Home/>   
     <Card title={'ChatGPT'} item={ChatGPTItems}/>
     <Card title={'Research'} item={ChatGPTItems}/>
     <Card title={'For Business'} item={ChatGPTItems}/>
     <Card title={'For Developers'} item={ChatGPTItems}/>
     <Card title={'Stories'} item={ChatGPTItems}  increaseWeight={true}/>
     <Card title={'News'} item={ChatGPTItems}/>
     <Answer/>
     <Footer/>
    </>
  )
}

export default App
