
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Spotify from './component/Spotify';
import Phonebookform from './component/Phonebookform';
import Home from './component/Home';
import Editphonebook from './component/Editphonebook';
import {Route, Switch} from 'react-router-dom'
import PhonebookContextProvider from './context/ContactContext'

function App() {
  return (
    <div id='container'>
      <Navbar />
      <Switch>
      <PhonebookContextProvider>
        <Route path='/' exact component={Home}/>
        <Route path='/phonebookform' exact component={Phonebookform}/>
        <Route path='/phonebook/edit/:id' exact component={Editphonebook}/>
        <Route path='/Spotify' exact component={Spotify}/>
        </PhonebookContextProvider>
      </Switch>
    </div>
  )
}

export default App

