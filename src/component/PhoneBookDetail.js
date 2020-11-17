import React, {useContext, useState} from 'react'
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { ContactContext } from '../context/ContactContext'

function PhoneBookDetail({item, index}) {

  const {deleteContact} = useContext(ContactContext)

  const [isContactOpen, setIsContactOpen] = useState(false) 

  const handleContactOpen = () =>{
    setIsContactOpen((prevState)=>{
      if(!prevState){
        setIsContactOpen(true)
      } else {
        setIsContactOpen(false)
      }
    })
  }

  return(
    isContactOpen ? (<div  className='tbody'><tbody key={item.id}  onClick={handleContactOpen}>
    <tr className='tr_style'>
    <th></th>
      <th >First Name</th>
      <td>{item.firstName}</td>
    </tr>
    <tr>
      <th></th>
      <th>Last Name</th>
      <td>{item.lastName}</td>
    </tr>
    <tr className='tr_style'>
      <th></th>
      <th >Company</th>
      <td>{item.company}</td>
    </tr>
    <tr>
      <th></th>
      <th>Phone</th>
      <td>{item.phone}</td>
    </tr>
    <tr className='tr_style'>
      <th></th>
      <th >Email</th>
      <td>{item.email}</td>
    </tr>
    <tr>
      <th></th>
      <th>Date</th>
      <td>{item.date}</td>
    </tr>
    <tr className='tr_style'>
      <th></th>
      <th >URL</th>
      <td>{item.url}</td>
    </tr>
    <tr>
      <th></th>
      <th>Address</th>
      <td>{item.address}</td>
    </tr>
    <tr className='tr_style'>
      <th></th>
      <th >Birthday</th>
      <td>{item.birthday}</td>
    </tr>
    <tr>
      <th></th>
      <th>Social Profile</th>
      <td>{item.socialProfile}</td>
    </tr>
    <tr className='tr_style'>
      <th></th>
      <th >Note</th>
      <td>{item.note}</td>
    </tr>
    <tr>
      <th></th>
      <td >
        <Button   id='contact_del_btn' onClick={()=>deleteContact(item._id)} variant="primary"  type="submit">
          Delete
        </Button>
      </td>
      <td >
        <Link to={`phonebook/edit/${item._id}`}>
          <Button   id='contact_edit_btn' variant="primary"  type="submit">
            Edit
          </Button>
        </Link>
      </td>
    </tr>
  </tbody></div>) : (<div id='tbody_list' className='tbody'>
    <tbody key={item.id} onClick={handleContactOpen}>
     
    <tr className='tr_style'>
      <th></th>
      <th></th>
      <td>{item.firstName}</td>
    </tr>

      </tbody>
      </div>) 
  
  )
}

export default PhoneBookDetail
