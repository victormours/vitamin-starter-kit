import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from './Layout'
import s from './style.css'

function About(props) {
  return (
    <Layout>
      <h1>About</h1>
      <p>This site is powered by vitaminjs. Hurray!</p>
    </Layout>
  );
}

export default withStyles(s)(About);
