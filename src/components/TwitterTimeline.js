import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class TwitterTimeline extends Component {
  render() {
    return (
      <Timeline 
        dataSource={{
        sourceType: 'profile',
        screenName: 'nimaiwalsh'}}
        options={{
        username: 'NimaiWalsh',
        height: '400',
        width: '100%'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
    )
  }
}