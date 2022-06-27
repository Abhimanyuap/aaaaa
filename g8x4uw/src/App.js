import Slide from "./Components/Slide";
import "./styles.css";



// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  function MyFun1(){
     var xo=data.map(function(el){
      return el;
    })
    console.log(xo)
     }
     function MyFun2()
     {
       console.log("hi")
     }
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide />
      <button onClick={MyFun2()} data-testid="prev">Prev</button>
      <button onClick={MyFun1()} data-testid="next" >Next</button>
    </div>
  );
}
