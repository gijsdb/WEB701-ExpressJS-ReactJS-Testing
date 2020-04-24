import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import authActions from '../Actions/authActions';
import { Login } from '../Components/Login'

const mapStateToProps = function(state){
  return {
    something: state.something,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    loginUser: authActions.loginUser,
  }, dispatch)
}

class LoginContainer extends React.Component {

    componentDidMount() {
      //now has access to data like this.props.something, which is from store
      //now has access to dispatch actions like this.props.getSomething
      console.log(this.props.user)
    }

    render() {
        //will pass down store data and dispatch actions to child components
        return (
               <div>
                   <Login loginUser={this.props.loginUser} />
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)