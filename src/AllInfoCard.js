import firebase from './firebase'
import React, {Component} from 'react';
import { Link } from 'react-router'
import UserCard from './UserCard';
import NewContact from './NewContact';


class AllInfoCard extends Component {
  constructor(props){
    super()

  }

  get baseContactReference() {
    return firebase.database().ref(`baseContact/${firebase.auth().currentUser.uid}/${this.props.routeParams.id}`);
  }



  render() {
    console.log(snapshot.val())
    return(
      <div className='all-contact-info' >
        {/* <h1>Full Name: {this.props.contact.fullName} </h1>
        <h1>Company: {this.props.contact.company} </h1> */}
        {/* <h1>E-mail: {this.props.contact.email}</h1>
        <h1>Phone: {this.props.contact.phone} </h1>
        <h1>LinkedIn:{this.props.contact.linkedin} </h1>
        <h1>Twitter: {this.props.contact.twitter} </h1>
        <h1>URL: {this.props.contact.url}</h1>
        <h1>Notes: {this.props.contact.notes} </h1> */}
      </div>
    )
  }

}




export default AllInfoCard;
