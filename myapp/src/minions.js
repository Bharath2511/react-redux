import React from 'react'

const Minions = ({minions}) => {
        return (
            <div className="minion-list">
                {
                 minions.map(minion => {
                    return    minion.age > 15 ? (
                        <div className="minion" key={minion.id}>
                        <div>name : {minion.name}</div>
                        <div>Age : {minion.age}</div>
                        <div>Belt: {minion.belt}</div>
                        </div>
                        ) : null
                    })
         
                }
            </div>
        )
    
}

export default Minions