import React, { Component } from 'react';
const Twitter = require('twitter');
const getBearerToken = require('get-twitter-bearer-token');

const twitter_consumer_key = 'u9NAGnkkxRKhaHZUYBvfh3mnq';
const twitter_consumer_secret = '3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr'

getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
    // handle error
    console.log('bearer_token error')
  } else {
  
    // bearer token from Twitter response
    console.log(res.body.access_token)
  }
})

// const client = new Twitter({
//   consumer_key: 'u9NAGnkkxRKhaHZUYBvfh3mnq',
//   consumer_secret: '3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr',
//   bearer_token: 'u9NAGnkkxRKhaHZUYBvfh3mnq:3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr',
// });

class TwitterFeed extends Component {
  componentDidMount() {
    // const params = {screen_name: 'nimaiwalsh'};
    // client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //   if (!error) {
    //       console.log(tweets);
    //   } else {
    //       throw error
    //   }
    // });
  }

  render() {
    return(
      <div>Test twitter feed</div>
    )
  }
}

export default TwitterFeed