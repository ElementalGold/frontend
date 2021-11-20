import logo from './logo.svg';
import './AppHeader.css';
import React from 'react';
import PriceWidget from './Widgets/PriceWidget';

class AppHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: 0,
        posts: []
      };
    }
  

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <PriceWidget />
            </header>
        );
    }
}

export default AppHeader;