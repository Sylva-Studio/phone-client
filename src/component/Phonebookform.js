
import { Form, Button, Col} from 'react-bootstrap';
import React, {useState, useContext} from 'react'
import { ContactContext } from '../context/ContactContext';

function Contactform() {
  
  const {createContact} = useContext(ContactContext)


  const [Contact, setContact] = useState({
    firstName: '',
    lastName: '',
    company:  '',
    phone:  '',
    email:   '',
    note:  '',
    url: '',
    address: '',
    birthday:'',
    socialProfile: ''

  })

  
  const handleChange = (e) =>{
    setContact((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const item = {
      firstName: Contact.firstName,
      lastName: Contact.lastName,
      company: Contact.company,
      phone: Contact.phone,
      email: Contact.email,
      url: Contact.url,
      note: Contact.note,
      address: Contact.address,
      birthday: Contact.birthday,
      socialProfile: Contact.socialProfile
      
    }

      
       
     
        createContact(item)
        setContact({
          firstName: '',
          lastName: '',
          company:  '',
          phone:  '',
          email:   '',
          note:  '',
          url: '',
          address: '',
          birthday:'',
          socialProfile: ''
        })

        window.location = '/';
  }
  
  return (
    
    <Form id='form' onSubmit={handleSubmit} >
      <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control name='firstName' value={Contact.firstName} onChange={handleChange} type="text" placeholder="First Name" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label>Last Name</Form.Label>
      <Form.Control name='lastName' value={Contact.lastName} onChange={handleChange} type="text" placeholder="Last Name" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>Company</Form.Label>
      <Form.Control name='company' value={Contact.company} onChange={handleChange} type="text" placeholder="Company" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label>Phone</Form.Label>
      <Form.Control name='phone' value={Contact.phone} onChange={handleChange} type="number" placeholder="Phone" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control name='email' type="email" value={Contact.email} placeholder=" email" onChange={handleChange} />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label>Date</Form.Label>
      <Form.Control name='date' value={Contact.date} onChange={handleChange} type="text" placeholder="Date" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>URL</Form.Label>
      <Form.Control value={Contact.url} onChange={handleChange} name='url' type="text" placeholder="URL" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label>Birthday</Form.Label>
      <Form.Control  name='birthday' value={Contact.birthday} onChange={handleChange} type="text" placeholder="Birthday" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>Social </Form.Label>
      <Form.Control  name='socialProfile' value={Contact.socialProfile} onChange={handleChange} type="text" placeholder="Social Profile" />
    </Form.Group>
    
    <Form.Group as={Col} >
      <Form.Label>Address </Form.Label>
      <Form.Control  name='address' value={Contact.address} onChange={handleChange} type="text" placeholder="Address" />
    </Form.Group>
    </Form.Row>
    <Form.Group >
      <Form.Label>Note</Form.Label>
      <Form.Control as="textarea" name='note' value={Contact.note} onChange={handleChange}  rows={3} placeholder='Note'/>
    </Form.Group>
    
    
    <Button  id='form_btn' variant="primary"  type="submit">
      Submit
    </Button>
  </Form>
    )

  
}

export default Contactform