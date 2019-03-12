import React from 'react'
/* CSS */
import '../assets/main.scss'
/* DATA */

/* COMPONENTS/PARTS */
import AsyncHead from '../components/AsyncHead'
import { Info,Background } from './ui'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      position: {
        x:0,
        y:0
      }
    }
    this.onKeyPress=this.onKeyPress.bind(this)
  }
  onKeyPress(e){
    //e.preventDefault()
    var {x,y} = this.state.position;
    //e.preventDefault();
    if (e.keyCode===38 || e.keyCode===87) {
      // up
      y+=8;
    }
    if (e.keyCode===40 || e.keyCode===83) {
      // down
      y-=8;
    }
    if (e.keyCode===37 || e.keyCode===65) {
      // left
      x-=16;
    }
    if (e.keyCode===39 || e.keyCode===68) {
      // right
      x+=16;
    }
    if (e.keyCode===13) {
      // enter
    }
    this.setState({position:{x,y}})
  }

  componentDidMount(){
    document.addEventListener('keyup', this.onKeyPress);
    document.addEventListener('keydown', this.onKeyPress);
    document.addEventListener('keypress', this.onKeyPress);

  }

  render(){
    var {x,y} = this.state.position;
    return (
      <div>
        <AsyncHead />
        <Background position={{x,y}}/>
        <Info />

      </div>
    )
  }
}

export default Home
