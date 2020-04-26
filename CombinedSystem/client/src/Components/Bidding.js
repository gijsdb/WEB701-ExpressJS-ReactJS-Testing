import React from 'react';
import { connect } from 'react-redux' 
import axios from 'axios'
import { Link } from 'react-router-dom'


class Bidding extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({

         })
    }

    render() {
        return (
            <div>
                <h2>Bidding</h2>
                <label>Price</label>
                <input type="number" name="amount" placeholder="0 Dollars"/><br/>
                <button>Place bid</button><br/>
                <div class="error"><br/>
                    <ul id="bid-list">
                        {/* Insert list of bids here */}
                    </ul>
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

  export default connect(mapStateToProps)(Bidding) //redux connecting