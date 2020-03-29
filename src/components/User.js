import React from 'react';



class User extends React.Component {
    render() {
        const { face, mycrap, getcrap } = this.props
        return (
            <div>
                <img src={face} className="face"/>
                <p className="mycrap">現在の拍手：{mycrap}</p>
                <p className="getcrap">もらった拍手：{getcrap}</p>
            </div>
        );
    }


}


export default User;