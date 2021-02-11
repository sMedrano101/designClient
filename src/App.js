import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Mainbody from './components/Mainbody';
import unsplash from "./API/unsplash";
import db from './firebase';

function App() {
  const [pins, setNewPins] = useState([]);

  // let pins = [];


  //using axios for the call.
  const makeAPIcall = (terms) => {
   return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {query: terms},
    });
  }

  const onSearchSubmit = (terms) => {
   // console.log(terms, 'terms at the app.js');
   let promises = [];
   let searchedPins = [];
   promises.push(
     makeAPIcall(terms).then((res) => {
     let results = res.data.results;
     results.map((pin) => {
       searchedPins.push(pin);
     });
    })
   );
   Promise.all(promises).then(() => {
     setNewPins(searchedPins);
   });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    
    db.collection("terms").onSnapshot((snapshot) => {
      let snapshotData = snapshot.docs;

      if (snapshotData.length >= 10) {
        snapshotData = snapshotData.slice(
          snapshotData.length - 5,
          snapshotData.legnth
          );
      }

  snapshotData.map((doc) => {
    promises.push(
      makeAPIcall(doc.data().terms).then((res) => {
      console.log(res, "does it save picture");
    })
    )
  });
});
};

  useEffect (() => {
    getNewPins();
  }, []);

//onSearchSubmit created function to send to header.js.
  return (
    <div className="app">
   <div className="app_header">
     <Header onSubmit={onSearchSubmit}/> 
     </div>
     <div className="app_body">
      <Mainbody pins={pins}/>
     </div>
  
    </div>
  );
}

export default App;
