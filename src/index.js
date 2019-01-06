import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    //WE CAN DEFINE constructor(). IF NO, WE GET SOME ERROR
    constructor(props) {
       super(props);

    //THIS IS THE ONLY TIME (initializing) we do 
    //direct assigment to this.state
       this.state = {
           lat: null,
           errorMessage: ''
       };

       window.navigator.geolocation.getCurrentPosition(
           (position) => {

                //ONLY UPATE STATE WITH setState()
               this.setState({lat: position.coords.latitude});

               //got error
                //this.state.lat = ...
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
       );

    }

    //WE HAVE TO DEFINE render(). IF NO, WE GET SOME ERROR
    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))