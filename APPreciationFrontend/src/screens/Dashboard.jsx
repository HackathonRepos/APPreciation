import React from "react";
import firebase from "../firebase";


function Dashboard() {

  async function DisplayRestaurants() {
    let db = firebase.firestore();
    let user_id = "TMTD86D3yZN3zfMT6xsgp0y4LTW2";
    // let user_id = firebase.auth().currentUser;
    
    const data = await db.collection("users").doc(user_id).get();
    const restaurants = (data.data())["restaurants"].map(i => {
      <p> {i} </p>
    });
    return restaurants
  }
  return (
    <div>
      <p>Dashboard</p>
      {DisplayRestaurants()}
    </div>
  );
}

export default Dashboard;
