import React, {useEffect, useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

 function App () {
    //  constructor(){
    //      super();
    //       this.state ={
    //          robots : [],
    //          searchFeild : ''
    //      }
    //  }
//      componentDidMount(){
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => {this.setState({robots : users})})
//      }
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => {setRobots(users)})
},[])

         const[robots , setRobots] = useState([])
         const[searchFeild , setSearchFeild] = useState('')
         
         const onSearchChange = (event) => {
         setSearchFeild(event.target.value)
         }
         const filterRobos = robots.filter(robots => {
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
            <SearchBox seachChange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
            <CardList robots ={filterRobos}/> 
            </ErrorBoundry>
            </Scroll>
            </div>
            );
        }
     }
 export default App;