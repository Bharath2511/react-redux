import React,{Component} from 'react'

class Minions extends Component {
    render() {
        const{minions} = this.props
        //console.log(this.props)
        const minionList = minions.map(minion => {
            return (
            <div className="minion" key={minion.id}>
             <div>name : {minion.name}</div>
             <div>Age : {minion.age}</div>
             <div>Belt: {minion.belt}</div>
            </div>
            )
        })
        return (
            <div className="minion-list">
                {minionList}
            </div>
        )
    }
}

export default Minions