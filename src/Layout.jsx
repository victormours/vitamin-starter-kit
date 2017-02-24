import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Helmet from 'react-helmet';
import { Link } from 'react-router'
import s from './style.css'

function Layout(props) {
  return (
    <div className={s.app}>
      <Helmet
        title="VitaminJS"
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      />
      <Link to="/">Home</Link>
      { props.children }
    </div>
  );
}

export default withStyles(s)(Layout);
