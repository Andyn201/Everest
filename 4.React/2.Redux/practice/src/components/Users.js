import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, changeBackground} from '../actions/actions';
import './Users.css';

class Users extends Component {

    //   Fetch Posts
    componentWillMount(){
        this.props.fetchPosts();
    }


    render() {

        const Users = this.props.users.map(user => (
            <div key={user.id} className="User">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button onClick={() => this.props.changeBackground(this.props.background)}>Change Background</button>
            </div>
        ));

        return (
            <div>
                {Users}
            </div>
        )
    }
}

//   Change State from rootReducer and reducer to props
const mapStateToProps = state => ({
    users: state.users.items,
    background: state.users.background,
});

export default connect(mapStateToProps, {fetchPosts, changeBackground})(Users);