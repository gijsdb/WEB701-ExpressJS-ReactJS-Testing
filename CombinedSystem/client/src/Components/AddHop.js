import React from 'react';
import { connect } from 'react-redux' 
import axios from 'axios'

class AddHop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            variety: '',
            amount: '',
            price: '',
            sweetness: '',
            bitterness: '',
            error: '',
            success: ''
        };
        this.onChange = this.onChange.bind(this);
        this.addHop = this.addHop.bind(this);
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    async addHop(e) {
      const hop = {
        variety: this.state.variety,
        weight: this.state.amount,
        bitterness: this.state.bitterness,
        sweetness: this.state.sweetness,
        price: this.state.price,
        userId: this.props.user.email
      }
      e.preventDefault();
      //console.log(this.state.amount)
        await axios.post(`http://localhost:8091/addhop`,
            hop
        )

    }
    

    render() {
        return (
            <div className="container padTop">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h2>Add new hops</h2>
                            </div>
                        </div>

                        <div className="row">
                                <div className="col">
                                    <form onChange={this.onChange} onSubmit={this.addHop} className="AddHops">
                                        <label>Variety</label><br/>
                                        <input 
                                            type="text" 
                                            name="variety" 
                                            placeholder="variety"
                                            ref={node => this.variety = node}
                                        /><br/>
                                        <label>Weight (KG)</label><br/>
                                        <input 
                                            type="number"  
                                            name="amount"  
                                            min="1" 
                                            max="100" 
                                            placeholder="weight"
                                            ref={node => this.amount = node}
                                        /><br/>
                                            <label>Bitterness</label><br/>
                                            <input 
                                                type="number"
                                                name="bitterness" 
                                                placeholder="bitterness" 
                                                defaultValue="1" 
                                           
                                                ref={node => this.bitterness = node}
                                            /><br/>
                                            <label>Sweetness</label><br/>
                                            <input 
                                                type="number" 
                                                name="sweetness" 
                                                placeholder="sweetness" 
                                                defaultValue="1" 
                                                min="1"
                                                max="10"
                                                ref={node => this.sweetness = node}
                                            /><br/>
                                        <label>Price (NZD)</label><br/>
                                        <input 
                                            type="number"  
                                            name="price" 
                                            placeholder="0 Dollars"
                                            ref={node => this.price = node}
                                        /><br/>
                                        <button className="btnAddHop">Add hop</button><br/>
                                   </form>
                                    <p>{this.state.error}</p><br/>
                                    <p>{this.state.success}</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-6">
                        <h2>Free for extra fuctions</h2>
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

  export default connect(mapStateToProps)(AddHop) //redux connecting