
import InstantAnswer from './Components/Answer'
import Card from './Components/Cards'
import { ChatGPTItems,Research, Business,Developer, News } from './Components/Cards/constant'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <>
     <Header/>
     <Home/>   
     <Card title={'ChatGPT'} item={ChatGPTItems}/>
     <Card title={'Research'} item={Research}/>
     <Card title={'For Business'} item={Business}/>
     <Card title={'For Developers'} item={Developer}/>
     {/* <Card title={'Stories'} item={ChatGPTItems}  increaseWeight={true}/> */}
     <Card title={'News'} item={News}/>
     <InstantAnswer/>
     <Footer/>
    </>
  )
}

export default App
