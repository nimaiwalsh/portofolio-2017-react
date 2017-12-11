import React, { Component } from 'react';
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: 'u9NAGnkkxRKhaHZUYBvfh3mnq',
  consumer_secret: '3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr',
  access_token_key: '21143407-VdX7E4lw51KmbsMdQVkXp1nRa5BsKQqwIIjYS7cDQ',
  access_token_secret: 'ZqL35cx90wj6Ylb7xHze6DKsuShy0kHBv7R32VqzDGFEs',
})

class TwitterFeed extends Component {
  componentDidMount() {
    const params = {screen_name: 'nimaiwalsh'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
          console.log(tweets);
      } else {
          throw error
      }
    });
  }

  render() {
    return(
      <div>Test twitter feed</div>
    )
  }
}

export default TwitterFeed