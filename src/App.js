import { useState, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage.js';
import ProjectPage from './Pages/ProjectPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import EditPage from './Pages/EditPage/EditPage'
import { getUser, logout } from './services/userService';
import { fetchCrochetData } from './services/crochet'

import './App.css';

function App(props) {

  /* component state */
  const [ userState, setUserState ] = useState({ user: getUser()});
  
  /* helper functions */

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to dashboard
    props.history.push('/project');
  }

  function handleLogout() {
    logout(); 
    setUserState({ user: null }); 
    props.history.push('/');
  }

                  /*  Data from server..js */

  const [crochetData, setCrochetData] = useState(
   []
  )

  async function getCrochetData() {
    console.log('hello')
    const data = await fetchCrochetData()
    console.log('data', data)
    setCrochetData(data);
  }

  useEffect(() => {
    getCrochetData();
    console.log('effect')
  }, [])

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/" render={ props => 
            <HomePage user={userState.user}/>
          } />
          <Route exact path="/project" render={ props => 
            getUser()?
            <ProjectPage crochetData={crochetData}/>
            :
            <Redirect to="/login" />
          }/>
          <Route exact path="/signup" render={ props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/login" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route path="/edit/:id" component={ EditPage }/>
        </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
