import './PriceWidget.css';
import React from 'react';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3001/price/bitcoin/usd';

class PriceWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "Unknown"
        };
    }

    tick() {
        axios({ 
            method: 'get', 
            url: `${apiUrl}`
          })
          .then(response => {
              console.log(response);
              this.setState(state =>({
                price: response.data.price
              }));
          });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10000);
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <span className="Price-Widget">
                ${this.state.price}
            </span>
        )
    }
}

export default PriceWidget;