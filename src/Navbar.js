import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

//stateless functional component
const Navbar = (props) => (
    <header>
        <h1>
        	Memory Game
        </h1>
        <div id="stripe">
            <button class="reset" onClick={props.onNewGame}>New Game</button>
        </div>
    </header>
);

Navbar.propTypes = {
    onNewGame: PropTypes.func.isRequired
};

export default Navbar;