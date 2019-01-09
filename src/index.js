import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
class App extends React.Component{

    state = {
        lat: null,
        errorMessage: ''
    }

    //WE HAVE TO DEFINE render(). IF NO, WE GET SOME ERROR
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }

    componentDidMount(){//LIFECYCLE METHOD
        window.navigator.geolocation.getCurrentPosition(
            //ONLY UPATE STATE WITH setState()
            position => this.setState({lat: position.coords.latitude}),
             err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Loading message='Loading...'/>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))