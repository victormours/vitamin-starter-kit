import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css'
import Counter from './Counter';
import logo from './logo.png';
import Helmet from 'react-helmet';

class Index extends Component {
    render() {
        return (
            <div className={s.app}>
                <div className={s.header}>
                    <img src={logo} alt="logo" className={s.logo} />
                </div>
                <p className={s.message}>
                    Welcome !
                    <br/>
                    Here you can see an example using <a href="https://facebook.github.io/react/">React</a> 
                    with an implementation of <a href="http://redux.js.org/">redux</a>.
                    <br/>
                    Take a look at 
                    <a href="https://github.com/kriasoft/isomorphic-style-loader">
                        CSS Modules
                    </a> for the style.
                    <br/>
                    <a href="https://github.com/nfl/react-helmet">
                    Helmet
                    </a>
                    &nbsp;is there to manage your head !
                    <br/>
                    Try to make some changes and save to reload.
                </p>
                Redux demo:
                <div className={s.counter}>
                    <Counter />
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Index);
