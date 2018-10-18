import React from 'react'

const Minions = ({minions}) => {
    
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

export default Minions