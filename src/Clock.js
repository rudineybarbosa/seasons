import React from 'react';

class Clock extends React.Component{
    state = {
        time: null
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)
    }

    render(){
        return(
            <div>
                Hora: {this.state.time}
            </div>
        )
    }
}

export default Clock;