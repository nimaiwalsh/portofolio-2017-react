import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class TwitterTimeline extends Component {
  render() {
    return (
      <Timeline 
        dataSource={{
        sourceType: 'profile',
        screenName: 'twitterdev'}}
        options={{
        username: 'TwitterDev',
        height: '400',
        width: '400'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
    )
  }
}