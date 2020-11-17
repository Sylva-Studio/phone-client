import React, { Component, createContext } from 'react'
import {withRouter} from 'react-router-dom'


export const ContactContext = createContext()

export class ContactContextProvider extends Component {

  state = {
    Contact : [],

    singleContact:{}

  }

  componentDidMount(){
    fetch('http://127.0.0.1:5000/Contact')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        Contact:data
      })
      
    })

    // this.getSingleItem()
    
  }

  // getSingleItem = async() => {
  //   const fetch_id = await fetch(`http://127.0.0.1:5000/Contact/${this.props.match.params.id}`)
  //   const data = await fetch_id.json()

  //   this.setState({singleContact:data})
  //   console.log(this.props.match)
  // }

  createContact = (item) =>{
    const req = {
      method : 'POST',
      headers : {'Content-Type':'application/json'},
      body: JSON.stringify(item)
    }
    fetch('http://127.0.0.1:5000/Contact/add', req)
    .then(res=>res.json())
    .then(data=> data)
    .catch(Error=>console.log(Error))
  }

  // editContact = (item) => {
  //   const req = {
  //     method : 'POST',
  //     headers : {'Content-Type' : 'application/json'},
  //     body : JSON.stringify(item)
  //   }
  //   fetch(`http://127.0.0.1:5000/Contact/edit/${this.props.match.params.id}`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // }
  
  deleteContact =  (_id) => {
    fetch(`http://127.0.0.1:5000/Contact/${_id}`, {method:'DELETE'})
    .then(res=>res.json())
    .then(data=>console.log(data))
   

    this.setState({
      Contact : [...this.state.Contact.filter(item => item._id !== _id)]
    })
  }

  

  render() {
    return (
      <ContactContext.Provider value={{...this.state, createContact:this.createContact, editContact:this.editContact, deleteContact:this.deleteContact}}>
        {this.props.children}
      </ContactContext.Provider>
    )
  }
}

export default ContactContextProvider
