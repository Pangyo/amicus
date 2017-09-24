import React from 'react';

const Header = props => 
(<header id="masthead" className="masthead navbar navbar-default navbar-fixed-top" xmlns="http://www.w3.org/1999/html">
    <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="./"><img src={require('../../images/logo.png')} alt="Site Logo"/></a>
        </div>
        <nav id="main-menu" className="collapse navbar-collapse pull-right">
            <ul className="nav navbar-nav">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/">Member</a></li>
                <li><a href="/">Seminar Blog</a></li>
                <li><a href="#">Project Blog</a></li>
                <li><a href="/">Tech Blog</a></li>
            </ul>
        </nav>
    </div>
</header>)

export default Header;