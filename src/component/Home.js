import React, {useContext} from 'react'
import { Table } from 'react-bootstrap';
import { ContactContext } from '../context/ContactContext';
import PhoneBookDetail from './PhoneBookDetail';


function Home() {

 
  const {Contact} = useContext(ContactContext)
  return (
    <div id='home'>
      <Table id='table' striped   >
        
        {Contact.map((item, index)=>(
          <PhoneBookDetail key={index} item={item} index={index}/>
        ))}
 
      </Table>
    </div>
  )
}

export default Home
