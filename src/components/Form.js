import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
        }
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <input 
               type="text" 
               value={this.state.input} 
               onChange={this.handleChange}/>
               <button>追加</button>
           </form>
        );
    }

    handleChange = e => {
        this.setState({
            input: e.currentTarget.input
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            input: "",
        })
    }
}

export default Form;