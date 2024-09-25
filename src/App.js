import { Provider } from 'react-redux';
import './App.css';
import Browse from './Components/Browse';
import appStore from './utlis/appStore';

function App() {
  return (
    <Provider store={ appStore}>
       
      <Browse/>
    </Provider>
    
  );
}

export default App;
