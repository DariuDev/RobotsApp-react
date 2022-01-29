import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';


 class App extends React.Component {
     constructor(){
         super();
          this.state ={
             robots : robots,
             searchFeild : ''
         }
     }
     onSearchChange = (event) => {
         this.setState({searchFeild : event.target.value})
         }
    render(){
        const filterRobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
           })  
        return(
            <div className= 'tc '>
                <h1>RoboFriends</h1>
            <SearchBox seachChange = {this.onSearchChange}/>
            <CardList robots ={filterRobos}/> 
            </div>
            );
     }
}
export default App;