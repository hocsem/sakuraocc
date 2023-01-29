//fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id')
  //.then(response => {response.json();
 // })
//let cardid:[]

 // .then (data =>{
 //   data.forEach(id =>{
  //    const markup = "<li>$¨card.id}"</li>;
   //   document.querySelector("ul").insertAdjacentHTML("beforeend", markup)

 //   })

   // document.getElementById('data').innerHTML = data
   // console.log(cardid) 
   // import { useState, useEffect } from "react";

//export default function App() {
// const [data, setData] = useState(null);
 //const [loading, setLoading] = useState(true);
 //const [error, setError] = useState(null);

// useEffect(() => {
//fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id')

  // .then((response) => console.log(response));
 //}, []);

 //return <div className="App">App</div>;
//}
  // console.log(App)
  async function getData() {
    const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
    const data = await response.json();
    console.log(data);
  }