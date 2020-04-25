import React from 'react';
import axios from 'axios'

class Marketplace extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="container padTop">
            <div className="row">
            <div className="col">
                <h1>Marketplace</h1>
            </div>
            </div>
            {/* Add new product component here */}
            <div className="row padTop">
                <div className="col">
                    <h1>Hops stored in database</h1>
                </div>
            </div>

            <div className="row padBottom">
            <div className="col-md-4">
                <div className="card hopCard">
                <img src="../assets/isolatedHop.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"> Bitterness: </p>
                    <p className="card-text"> Sweetness: </p>
                    <p className="card-text"> Weight: </p>
                    <p className="card-text"> Price: </p>
                    <p className="card-text"> Added by:</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
        );
      }
}

export default Marketplace