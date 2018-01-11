import React, { Component } from 'react';
import logo from './communityBank.svg'
import './Home.css';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from './ducks/reducer'

class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
    super();
    this.lock = null;
    this.login = this.login.bind(this);
    // this.getUserInfo = this.getUserInfo.bind(this);
  }

  // componentDidMount() {
  //   this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
  //   this.lock.on('authenticated', authResult => {
  //     // make sure to use arrow function, if dont use arrow use this.
  //     this.lock.getUserInfo(authResult.accessToken, (error, user) => {
  //       console.log('user', user)
  //       // axios.post('/login', { userId: user.sub }).then(response => {
  //         const response = {
  //           data: {
  //             user: {
  //               name: 'bobert', picture: 'x'
  //             }
  //           }
  //         }
  //         this.props.login(response.data.user);
  //         // history takes us from the homepage to the route that is invoked by pushing it to the address bar
  //         this.props.history.push('/private');
  //       // })
  //     })
  //   });
  // }

  componentDidMount() {
    this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
    this.lock.on('authenticated', authResult => {
      // make sure to use arrow function, if dont use arrow use this.
      this.lock.getUserInfo(authResult.accessToken, (error, user) => {
        console.log('user', user)
        axios.post('/login', { userId: user.sub }).then(response => {
          console.log(response.data);
          this.props.login(response.data.user);
          // history takes us from the homepage to the route that is invoked by pushing it to the address bar
          this.props.history.push('/private');
        })
      })
    });
  }

  login() {
    this.lock.show()
  }

  render() {
    // const { user } = this.props;
    return (
      <div className="home">
        <img src={logo} />
        <div className="actions">
          <button onClick={this.login}>Login in</button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  login: login, 
};

export default connect(null, mapDispatchToProps)(Home);