import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import HomeTemplate from 'components/home/HomeTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

class Home extends Component {
  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
          <HomeTemplate />
      </PageTemplate>
    );
  }
}

export default Home;

