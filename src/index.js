import React from 'react'
import Wifi from './Icons/Wifi'
import Phone from './Icons/Phone'
import Trash from './Icons/Trash'
import Message from './Icons/Message'
import Envelope from './Icons/Envelope'
import World from './Icons/World'
import Mobile from './Icons/Mobile'
import AddPlus from './Icons/AddPlus'
import Clock from './Icons/Clock'
import LeftArrow from './Icons/LeftArrow'
import Home from './Icons/Home'
import DotsVertical from './Icons/DotsVertical'
import Search from './Icons/Search'
import Palette from './Icons/Palette'
import Send from './Icons/Send'
import Group from './Icons/Group'
// var context = require.context('./Icons', false, /\.js$/)

const listOFIcons = {
  'phone': (props) => <Phone {...props} />,
  'wifi': (props) => <Wifi {...props} />,
  'addplus': (props) => <AddPlus {...props} />,
  'arrow-left': (props) => <LeftArrow {...props} />,
  'clock': (props) => <Clock {...props} />,
  'home': (props) => <Home {...props} />,
  'dots-vertical': (props) => <DotsVertical {...props} />,
  'magnify': (props) => <Search {...props} />,
  'palette': (props) => <Palette {...props} />,
  'send': (props) => <Send {...props} />,
  'delete': (props) => <Trash {...props} />,
  'group': (props) => <Group {...props} />

}

const Icon = props => {
  return listOFIcons[props.name](props)
}

export default Icon
