import React from 'react';
import axios from 'axios'
import AddHop from './AddHop'

class Marketplace extends React.Component {

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
      console.log(this.state.hops)
    }

    render() {
        return (
            <div className="container padTop">
            <div className="row">
            <div className="col">
                <h1>Marketplace</h1>
            </div>
            </div>
            <AddHop></AddHop>
            <div className="row padTop">
                <div className="col">
                    <h1>Hops stored in database</h1>
                </div>
            </div>

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
                        </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
        );
      }
}

export default Marketplace