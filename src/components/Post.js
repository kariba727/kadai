import React from 'react';

class Post extends　React.Component {
    render() {
        const {text} = this.props
        return(
            <div>
                {text}
            </div>
        );
    }
}

export default Post;