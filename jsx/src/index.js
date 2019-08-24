import React from 'react';
import ReactDOM from 'react-dom';
import GifPlayer from 'react-gif-player';
import Title from './title.js'


class MyGifPlayer extends React.Component {
  render (){
    return(
      <GifPlayer gif="http://giphygifs.s3.amazonaws.com/media/733TLTuTCTxQs/giphy.gif" />
    );
  };
}


ReactDOM.render(
    // <Title />,
    <MyGifPlayer/>,
    document.querySelector('#root')
);
