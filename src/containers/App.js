import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from '../robots';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Electrolize&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Rubik+Wet+Paint&display=swap" rel="stylesheet';
link.rel = 'stylesheet';
document.head.appendChild(link);


class App extends Component {


    

    constructor(){
        super();
        this.state={
            robots:robots,
            searchfeild : ''
        }
        
    }

    onSearchChange=(event)=>{
        this.setState({searchfeild: event.target.value})
        
    }

render(){
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
     })
    return(
        <div className="tc">
            <h1 className="rubik">RoboFriends</h1>
            <SearchBox  searchChange={this.onSearchChange}/>

            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>

    );
}
        
    
}
export default App;