import React, { Component } from 'react';
import './Section.css';

export default class Section extends Component {

    constructor(props){
        super(props);

        this.state = {
            background: true,
            AJAX_Stuff: []
        };


        this.changeBackground = this.changeBackground.bind(this);
    }


    changeBackground () {
        this.setState({ background: !this.state.background});
    }


    async componentDidMount(){

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            this.setState({ AJAX_Stuff: data});
        }
        
        catch(err){
            console.log(err);
        }

    }


    render() {

        const {background, AJAX_Stuff} = this.state;

        return (
            <div id="section" className={background ===true ? "purple" : "blue"}>
                <button onClick={this.changeBackground}>Change Background</button>

            {AJAX_Stuff.map(data => (
                <div key={data["id"]}>
                    <h1>{data["title"]}</h1>
                </div> 
            ))}


            </div>
        )
    }
}
