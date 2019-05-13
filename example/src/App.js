import React, { Component } from 'react'

import Icon from 'svgicons'

export default class App extends Component {
  render () {
    return (
      <div style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',height:'100vh'}}>
        <Icon name='phone' size={26} color={'green'}  />
        <Icon name='wifi' size={40} color={'green'}  />
        <Icon name='home' size={16} color={'red'}  />
        <Icon name='send' size={16} color={'red'}  />
        <Icon name='addplus' size={46} color={'blue'}  />
        <Icon name='dots-vertical' size={46} color={'blue'}  />
        <Icon name='clock' size={46} color={'blue'}  />
        <Icon name='magnify' size={46} color={'blue'}  />
        <Icon name='palette' size={46} color={'blue'}  />
        <Icon name='delete' size={46} color={'#b7b8b8'}  />
        <Icon name='group' size={46} color={'red'}  />
      </div>
    )
  }
}
