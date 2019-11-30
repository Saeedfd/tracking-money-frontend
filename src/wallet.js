import React from 'react';
import './wallet.css';
import { Button} from 'react-bootstrap';
import  {Component} from 'react';
import WalletInfo from "./walletInfo";
import WalletCard from "./walletCard";


class  Wallet extends Component {
	state = {
		displayCard : false
	};

	toggleButton = () => {
		const showIt = this.state.displayCard;
		this.setState({ displayCard: !showIt})

	};

render(){
	let card = null;
	if(this.state.displayCard){
		card = (
			<div>
				<WalletInfo title={"transaction"}></WalletInfo>
				<WalletInfo title={"current balance"}></WalletInfo>
				<WalletInfo title={"total period"}></WalletInfo>
				<WalletCard></WalletCard>
			</div>
		);
	}
	return(
	<div className="container walletMargin">
	    <Button variant="info" size="lg" block onClick={this.toggleButton}>Wallet</Button>
	    <div className="container walletSetting">
	  		<Button variant="outline-warning">+</Button>
	  		<Button variant="outline-secondary">edit</Button>
	   		<Button variant="outline-danger">-</Button>
	   	</div>
		<div>{card}</div>

  	</div>
);}
}


export default Wallet;
