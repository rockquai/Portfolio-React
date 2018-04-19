import React from 'react';
import Carousel from 'components/home/Carousel';
import TabMenu from 'components/home/TabMenu';
import Video from 'components/home/Video';
import Ad from 'components/home/Ad';

const HomeTemplate = () => {
  return (
    <React.Fragment>
      <Carousel />
      <TabMenu />
      <Video />
      <TabMenu />
      <Ad />
    </React.Fragment>
  );
};

export default HomeTemplate;
