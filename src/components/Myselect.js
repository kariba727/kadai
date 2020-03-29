import React from 'react';

class Myselect extends React.Component {
    render() {
        const { myselect } = this.props;
        return (
            <select value={myselect} onChange={this.handleChange}>
                <option value="1">田中</option>
                <option value="2">鈴木</option>
                <option value="3">佐藤</option>
                <option value="4">林</option>
                <option value="5">田辺</option>
            </select>
        );
    }
    handleChange = e  => {
        this.props.onChange(e.currentTarget.value);
    }
}


export default Myselect;
