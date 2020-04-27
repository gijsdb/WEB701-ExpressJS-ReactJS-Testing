import React from 'react';
import { connect } from 'react-redux' 
import axios from 'axios'
import { Link } from 'react-router-dom'


class Bidding extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
          bidAmount: '',
          userId: '',
          hopId: '',
          error: null,
          matchingBids: [],
          allBids: [],
        })
        this.addBid = this.addBid.bind(this);
        this.onChange = this.onChange.bind(this);
        this.retrieveBids = this.retrieveBids.bind(this);
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    async retrieveBids() {
     await axios
      .get('http://localhost:8091/retrievebids')
      .then(res => {
        this.setState({ allBids: res.data });
        this.state.allBids.forEach(element => {
          if (element.hopId === this.props.hop.hopId) {
            this.state.matchingBids.push(element)
          }
        })
        // this.bids = res.data
      })
    }

    componentDidMount() {
      this.retrieveBids()
    }

    addBid(e) {
        e.preventDefault();     
        if (this.bidAmount.value < this.props.hop.price) {
          alert('Your bid amount must be above the set price')
          return
        }
        const newBid = {
            bidAmount: this.bidAmount.value,
            userId: this.props.user.email,
            hopId: this.props.hop.hopId
        }
          axios.post(`http://localhost:8091/addbid`,
          newBid
        )
    }

    render() {
        return (
            <div>
                <h2>Bidding</h2>
                <label>Price</label>
                <form onChange={this.onChange} onSubmit={this.addBid}>
                    <input 
                        type="number" 
                        name="bidAmount" 
                        placeholder="0 Dollars"
                        ref={node => this.bidAmount = node}
                    /><br/>
                    <button>Place bid</button><br/>
                </form>
                <div className="error"><br/>
                </div>
                <ul id="bid-list">
                    {this.state.matchingBids.map((bid) =>
                        <li>{bid.bidAmount}</li>
                    )}
                </ul>
            </div>
        );
      }
}

function mapStateToProps(state) { //redux mapping part
    return { 
      user: state.authReducer.user,
      isUserLoggedIn: state.authReducer.isUserLoggedIn,
    }
  }

  export default connect(mapStateToProps)(Bidding) //redux connecting