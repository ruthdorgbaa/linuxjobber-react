import logo from './logo.svg';
import './App.css'
import Nav from './components/nav/nav';
import Form from './components/profile/form.js';
import Profile from './components/profile/profile-detail';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
      <Profile/>
      
     
    </div>
    
  );
}

export default App;
