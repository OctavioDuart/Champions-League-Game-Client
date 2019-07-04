import React from 'react';
import './footer.css';


const Footer = (props) => {

    const testFunction = () => {
        console.log('j')
    }

    return (
        <footer id="footer-home-page" onClick={testFunction} style={{'marginTop': props.mt}}>
            <span className="offset-3">
                By Octávio Duarte
          </span>

        </footer>
    );
};

export default Footer; 