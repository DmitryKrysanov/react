import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
debugger;
    return (
      <BrowserRouter>
      <div className="app-wrapper"> 
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          {/* <Route path='/Profile' component={Profile} /> */}

          <Route path='/Profile' render={ () => <Profile 
          store={props.store}/> } />
          <Route path='/Dialogs' render={ () => <DialogsContainer 
          store={props.store} /> } /> 
          <Route path='/News' render={ () => <News /> } /> 
          <Route path='/Music' render={ () => <Music /> } /> 
          <Route path='/Settings' render={ () => <Settings /> } /> 
        </div>
      </div>
      </BrowserRouter>
    );
  }

export default App;