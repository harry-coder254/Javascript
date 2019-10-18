import React,{Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state={       //props cannot be changed but states can. That's why we are using state instead of props
            message:'Welcome visitor'

        }
    }
    changeMessage(){    //changing the message after clicking the button
        this.setState({   //the new message to be displayed
            message:'Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        
        )
    }
}

export default Message