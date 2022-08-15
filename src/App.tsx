import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import StylingProps from './components/StylingProps';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"

  }
  const nameList = [
    {
      first: 'Bryce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <StylingProps styles={{ border: '1px solid black', padding: "1rem", margin: "1rem" }} />
      {/* <Input handleChange={(e) => console.log(e)} value="" />
      <Button handleClick={(e, id) => console.log('Button is clicked!!!', e, id)} /> */}

      {/* <Heading>Placeholder children text..</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo!!!</Heading>
      </Oscar>
      <Status status='loading' />
      <Greet name="Vishwas" messageCount={20} isLoggedIn={true}/> */}
      {/* <Person personName={personName}/>
      <PersonList names={nameList}/> */}
    </div>
  );
}

export default App;
