import React from "react";
import firebase from "../firebase";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurantList: [] };
  }

  componentDidMount() {
    this.displayRestaurants();
  }
  async displayRestaurants() {
    let db = firebase.firestore();
    let user_id = "TMTD86D3yZN3zfMT6xsgp0y4LTW2";
    // let user_id = firebase.auth().currentUser;

    const data = await db.collection("users").doc(user_id).get();
    const restaurants = data
      .data()
      ["restaurants"].map((place, index) => <p key={index}> {place} </p>);
    this.setState({ restaurantList: restaurants });
    return restaurants;
  }

  render() {
    return (
      <div>
        <p>Dashboard</p>
        {this.state.restaurantList}
      </div>
    );
  }
}

export default Dashboard;
