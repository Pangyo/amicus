import React from 'react';
import ReactDOM from 'react-dom';
import Header from './jsx/snippet/header.jsx'

import IndexSlider from './jsx/index-slider.jsx'
import Footer from './jsx/snippet/footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/index.css';


class Hello extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IndexSlider />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);