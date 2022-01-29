import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

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
        const {searchFeild , robots} = this.state;
        const filterRobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchFeild.toLowerCase());
           })  
           if(!robots.length){
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
                <ErrorBoundry>
            <CardList robots ={filterRobos}/> 
            </ErrorBoundry>
            </Scroll>
            </div>
            );
        }
     }
}
export default App;