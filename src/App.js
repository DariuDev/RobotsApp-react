import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css'
import './App.html'


 class App extends React.Component {
     constructor(){
         super();
          this.state ={
             robots : [],
             searchFeild : ''
         }
     }
     componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {this.setState({robots : users})})
     }
     onSearchChange = (event) => {
         this.setState({searchFeild : event.target.value})
         }
    render(){
        const filterRobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
           })  
           if(this.state.robots.length === 0){
               return (
                <span className ="font-link tc">
                <h1>LOADING</h1>
                </span>
               );
           }else{
        return(
            <div className= 'tc '>
                <span className ="font-link">
                <h1>ROBOFRIENDS</h1>
                </span>
            <SearchBox seachChange = {this.onSearchChange}/>
            <Scroll>
            <CardList robots ={filterRobos}/> 
            </Scroll>
            </div>
            );
        }
     }
}
export default App;