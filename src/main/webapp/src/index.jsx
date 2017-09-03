import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'

class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello React!!!
            </div>
        );
    }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);