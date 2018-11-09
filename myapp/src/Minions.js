import React from "react";
import "./Minions.css";

const Minions = ({ minions, deleteMinion }) => {
  return (
    <div className="minion-list">
      {minions.map(minion => {
        return (
          <div className="minions" key={minion.id}>
            <div>Name: {minion.name}</div>
            <div>Age: {minion.age}</div>
            <div>Belt: {minion.belt}</div>
            <button
              onClick={() => {
                deleteMinion(minion.id);
              }}
            >
              Delete minion
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Minions;
