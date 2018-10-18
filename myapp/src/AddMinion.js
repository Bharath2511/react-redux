import React,{Component} from 'react'

class AddMinions extends Component {
    state = {
        name : null,
        age : null,
        belt : null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
render() {
    return(
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={} />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" onChange={} />
                <label htmlFor="belt">Belt:</label>
                <input type="text" id="belt" onChange={} />
                <button>Submit</button>
            </form>
        </div>
    )
}
}