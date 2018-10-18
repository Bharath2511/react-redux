import React,{Component} from 'react'

class Minions extends Component {
    render() {
        const{name,age,belt} = this.props
        console.log(this.props)
        return (
            <div className="ninja">
             <div>name : {name}</div>
             <div>Age : {age}</div>
             <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Minions