import CardCom from "./components/Card"
import Navigationbar from "./components/Navigationbar"
import './App.css'



function App() {


  return (
    <>
    <Navigationbar />

      <h1>Welcome to REACT</h1>

      <div className="Iphones">
        <CardCom title="Iphone 11 pro max"
         desc="264gb"
         imgUrl="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4860241/1.jpg?8923"
         price="500,000"
         />

<CardCom title="Iphone 12 "
         desc="128gb"
         imgUrl="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8893812/1.jpg?5270"
         price="600,000"
         />

<CardCom title="Iphone 14"
         desc="68gb"
         imgUrl="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/5925102/1.jpg?6274"
         price="900,000"
         />
      </div>
    </>
  )
}

export default App
