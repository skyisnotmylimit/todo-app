import Header from './components/Header';
import ListItem from './components/ListItem';
import Button from './components/Button';
import "./styles.css";

const todoArr = ["Eat","Code","Study","Sleep"];
const generateList = ()=>{
  const listItem = todoArr.map((todo)=>{
    return <ListItem text={todo}/>;
  });
  return listItem;
}

function App() {
  return (
    <div className="app-container">
      <Header />
      {generateList()}
      <Button />
    </div>
  );
}

export default App;
