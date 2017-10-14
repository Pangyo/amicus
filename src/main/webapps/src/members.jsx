import React from 'react';
import ReactDOM from 'react-dom';
import Header from './jsx/snippet/header.jsx'
import Footer from './jsx/snippet/footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/index.css';
import './css/style.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerClass='bg-change'/>
                {/* Content 넣을 예정 */}
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);