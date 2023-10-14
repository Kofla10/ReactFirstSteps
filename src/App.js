import logo from './logo.svg';
// import './App.css';
import './components/Jsx'
import ExampleOne from './components/exampleOne.js';
import Saludo from './components/saludo'
import Comentario from './components/comentario';
import ComponentTwo from './components/comentarioTwo';

function App() {
  const sujeto = {
    nombre     : 'Camilo',
    img        : 'https://via.placeholder.com/64',
    description: "This is Juanito, he likes writing drama"
  }

  const data = {
    img: 'https://via.placeholder.com/232',
    textOne: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500',
    textTwo: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }

  return (
    <div className="App">
      {/* <Jsx/> */}
      {/* <List/> */}
      <div className='container mt-5'>
        {/* <Form/> */}
        {/* <FormmHook/> */}
        {/* <ExampleOne/> */}
        {/* <Saludo namePerson = "Zuleima" age="123"/>
        <Saludo namePerson = "Camilo" />
        <Saludo namePerson = "Fernando" age="12"/> */}
        {/* <Comentario sujeto={sujeto}/> */}
        <ComponentTwo data={data}/>
 ``     </div>
    </div>
  );
}

export default App;
