import './App.css';
//import Header from './Header';
//import Header2 from './Header2';
//import Header3 from './Header3';

import BodyPart from './BodyPart';
import Searchbar from './Searchbar';


function App() {

    const Names = [
        "Biryani",
        "Chicken Biryani",
        "Mutton Biryani",
        "Panner Biryani",
    ]
    return (
      <div className="App">
        <Header/>
        <Header2 Names={Names}/>

        <BodyPart/>

     <Searchbar/>
     
     </div>
    );
    
}

export default App;














































































































































































































