import React from 'react';
import Myselect from './Myselect';
import User from './User';
import Opselect from './Opselect';
import Form from './Form';
import Post from './Post';

import './App.css';

let currentID =0;

const users = [
    { id: 0, face: "user0.png", mycrap: 50, getcrap: 0 },
    { id: 1, face: "user1.png", mycrap: 50, getcrap: 0 },
    { id: 2, face: "user2.png", mycrap: 50, getcrap: 0 },
    { id: 3, face: "user3.png", mycrap: 50, getcrap: 0 },
    { id: 4, face: "user4.png", mycrap: 50, getcrap: 0 },
];


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: 0,
            myselect: '0',
            value: '',
            posts: [],
        };


    }

 
    

    render() {
        const { myselect, userid } = this.state;

        return (
            <div>
                <div className="hedder">
                    <Myselect myselect={myselect} onChange={this.handleChangeMyselect} />
                    <User
                        id={userid}
                        face={users[userid].face}
                        mycrap={users[userid].mycrap}
                        getcrap={users[userid].getcrap}
                    />
                </div>
                <div className="main">

                    ほめたい人<Opselect />
                    {this.state.posts.map(({ id,text }) => <p key={id}><Post text={text}/></p>)}

                    <Form  />

                </div>
            </div>
        );
    }

}





export default App;