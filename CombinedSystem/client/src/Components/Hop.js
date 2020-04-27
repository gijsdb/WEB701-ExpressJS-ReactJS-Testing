import React from 'react';
import { connect } from 'react-redux' 
import axios from 'axios'
import { Link } from 'react-router-dom'
import Bidding from './Bidding'


class Hop extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            hop: []
         })
    }

    GetHop() {
      axios.get("http://localhost:8091/retrievehop/"+ this.props.match.params.id)
      .then(res => {
        this.setState({ hop: res.data });
      })
    }

    componentDidMount() {
        this.GetHop();
    }

    render() {
        return (
    <div className="container padTop">
        <Link to={`/marketplace`}>Back to market</Link>
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-6">
                        <h2>Variety</h2>
                        <h3>{this.state.hop.variety}</h3><br/>
                        <h2>Weight</h2>
                        <h3>{this.state.hop.weight}</h3><br/>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2>Bitterness</h2>
                            <h3>{this.state.hop.bitterness}</h3><br/>
                            <h2>Sweetness</h2>
                            <h3>{this.state.hop.sweetness}</h3><br/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Price</h2>
                        <h3>{this.state.hop.price}</h3><br/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <Bidding hop={this.state.hop}></Bidding>
            </div>
        </div>
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

  export default connect(mapStateToProps)(Hop) //redux connecting