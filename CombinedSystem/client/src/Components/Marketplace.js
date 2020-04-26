import React from 'react';
import AddHop from './AddHop'
import HopModule from './HopModule'

class Marketplace extends React.Component {

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

            <HopModule></HopModule>
            
        </div>
        );
      }
}

export default Marketplace