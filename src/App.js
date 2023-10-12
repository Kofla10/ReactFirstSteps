import logo from './logo.svg';
// import './App.css';
import './components/Jsx'
import Jsx from './components/Jsx';
import List from './components/list';
import Form from './components/form';
import FormmHook from './components/formHook';

function App() {
  return (
    <div className="App">
      {/* <Jsx/> */}
      {/* <List/> */}
      <div className='container mt-5'>
        {/* <Form/> */}
        <FormmHook/>
      </div>
    </div>
  );
}

export default App;
