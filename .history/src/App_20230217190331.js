
import List from './components/sidebar/List';
import './scss/index.scss';


function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items/>
        <List />
      </div>
      <div className='todo__tasks'></div>
    </div>
  );
}

export default App;
