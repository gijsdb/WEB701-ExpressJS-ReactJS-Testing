import React from 'react';
import { connect } from 'react-redux' 
import axios from 'axios'
import { Link } from 'react-router-dom'

class HopModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          hops: []
        }
      }

    componentDidMount() {
      axios.get("http://localhost:8091/retrievehops")
      .then(res => {
        //this.state.hops = res.data;
        this.setState({ hops: res.data });
      })
    }

    render() {
        return (
        <div className="row padBottom">
            {this.state.hops.map((hop) =>
                <div key={hop.hopId} className="col-md-4">
                    <div className="card hopCard">
                    <img src={require('../img/isolatedHop.png')} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"> Bitterness: {hop.variety} </p>
                        <p className="card-text"> Bitterness: {hop.bitterness} </p>
                        <p className="card-text"> Sweetness: {hop.sweetness} </p>
                        <p className="card-text"> Weight:  {hop.weight}</p>
                        <p className="card-text"> Price: {hop.price}</p>
                        <p className="card-text"> Added by: {hop.userId}</p>
                        <Link to={`/hop/${hop.hopId}`}>Buy hop</Link>
                    </div>
                    </div>
                </div>
            )}
        </div>
        );
      }
}

function mapStateToProps(state) { //redux mapping part
    return { 
      user: state.authReducer.user,
      isUserLoggedIn: state.authReducer.isUserLoggedIn
    }
  }

  export default connect(mapStateToProps)(HopModule) //redux connecting