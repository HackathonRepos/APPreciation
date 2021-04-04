import React from "react";
import firebase from "../firebase";


function Dashboard() {
  let db = firebase.firestore()
  let user_id = "TMTD86D3yZN3zfMT6xsgp0y4LTW2"
  // let user_id = firebase.auth().currentUser
  db.collection("users").doc(user_id).get()
  .then(results => {
    console.log(results.data())
    console.log(results.data()["restaraunts"])
  }).catch(e => console.log("error with getting restaraunts"))

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}

export default Dashboard;
