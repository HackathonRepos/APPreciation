import React from "react";

import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import { Flex, Text, Heading, Button, Center, Link } from "@chakra-ui/react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurantList: [], user_id:"", recipients:0, words:0, notes:0}; 
    firebase
      .auth()
      .onAuthStateChanged((user) =>{
          console.log(user)
          console.log(user.uid)
          this.setState({user_id: user.uid})
          if (user) {
            console.log("Signed In")
            let db = firebase.firestore();
            db.collection("users").doc(this.state.user_id).get()
            .then(data => {
              this.setState({recipients: data.data()["recipients_sent"]})
              this.setState({notes: data.data()["notes_written"]})
              this.setState({words: data.data()["words_written"]})
              let restaurants = data.data()["restaurants"]
              
              for (const r of restaurants) {
                db.collection("restaurants").doc(r).get()
                .then(d => {
                  const data = d.data()
                  const existing_restaurants = this.state.restaurantList;
                  existing_restaurants.push(data)
                  this.setState({restaurantList: existing_restaurants})
                })
                .catch(e => console.log("error: " + e));
              }
              const restaurant_elements = restaurants.map((place, index) => <p key={index}> {place} </p>);
              console.log(this.state.restaurantList)
            }).catch(e => console.log("error: " + e));
          } else {
            this.props.history.push("/signup")
          }
        }
      );
  }

  render() {
    return <Flex>{this.state.restaurantList}<div> <br /> {this.state.notes} Notes Written <br />  {this.state.recipients} Businesses Thanked! <br /> {this.state.words} Words Written!</div></Flex>;
  }
}

export default withRouter(Dashboard);
