import React,{Component} from 'react';


import './Header.css';
//import socio from '../socio.png';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="head">
            <div className="mainhead">
            <div className="HeaderNav">
                <p className="logo">
                    SOCIO
                </p>
            </div>
            </div>
            </section>
         );
    }
}
 
export default Header;