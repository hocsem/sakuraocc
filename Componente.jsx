//import { useEffect, useState } from "react"

//let [number, setNumber] = useState("id")
//let api = `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id/$(number)`

//useState(() => {
   // (async function getApi(){
        //let response = await fetch(api)
        //let data = await response.json()
       // setNumber(data.id)
       // console.log(data);

  ////  })()
//}, [api])

////import React, { useEffect, useState } from "react";

//function App() { 
   // import React, { useEffect, useState } from "react"

   // const PassParam = () => {

 // const [user, setUser] = useState([]);

 // const fetchData = () => {
   // return fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id/$(number")
        //  .then((response) => response.json())
         // .then((id) => setUser(id));
  //}

 //useEffect(() => {
   // fetchData();
 // },[])

 //return (
  //  <main>
     // <h1>card list</h1>
     // <ul>
       // {user && user.length > 0 && user.map((userObj, index) => (
          //  <li key={userObj.id}>{userObj.name}</li>
         //))}
  //    </ul>
   // </main>
 // );
//}

//export default App;

import React, { useEffect, useState } from "react"

const Componente = () => {
  const [user, setUser] = useState([])
  //const id = 1

  const fetchData = () =>{
fetch (`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/`)
      .then(response => {
       // return response.json()
        console.log (response.json())
      })
      .then(data => {
     //   setUser(data[0].name)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(<div>{user}</div>)
}

export default Componente