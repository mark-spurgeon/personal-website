import React from 'react'

import website from '../data/website'
import message from '../data/message'
import greetings from '../data/greetings'
import interests from '../data/interests'

export class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:website.personal.name,
      personal:website.personal,
      greeting:'_',
      interests:this.getInterests(),
    }
    this.akaName = this.akaName.bind(this);
    this.changeGreeting = this.changeGreeting.bind(this);
    this.changeInterests = this.changeInterests.bind(this);
  }

  componentDidMount(){
    this.setState({
      greeting:this.getGreeting(),
      interests:this.getInterests()
    })
  }

  akaName(e, val) {
    e.preventDefault();
    let name = website.personal.name;
    if (val===true){
      name = website.personal.aka;
    }
    if (this.state.name!==name){
      this.setState({name:name})
    }
    this.setState({name:name})
  }
  changeGreeting(e) {
    e.preventDefault();
    if (e.type==="mouseenter"){
      this.setState({
        greeting:this.getGreeting(),
      })
    } else if (e.type==="mouseleave") {
      this.setState({
        greeting:this.getGreeting(),
      })
    }
  }
  changeInterests(e) {
    e.preventDefault();
    this.setState({interests:this.getInterests()})
  }


  getGreeting(){
    var randomIndex = Math.floor((Math.random() * greetings.length));
    var greeting = greetings[randomIndex]
    return greeting;
  }
  getInterests(){
    var ints = [...interests];
    var index1 = Math.floor((Math.random() * ints.length));
    var int1 = ints[index1]
    ints.splice(index1, 1);
    var index2 = Math.floor((Math.random() * ints.length));
    var int2 = ints[index2]
    ints.splice(index2, 1);
    var index3 = Math.floor((Math.random() * ints.length));
    var int3 = ints[index3]
    return [int1, int2, int3];
  }

  render(){
    const {
      name,
      personal,
      greeting,
      interests
    } = this.state;

    let msg=<div></div>;
    if (message && (message.content!==''|| message.image!=='')) {
      msg = <a className="Message" target="_blank" href={message.link} style={{backgroundImage:`url('${message.image}')`}}>{message.content}</a>
    }

    const ints = interests.map((item, i) => {

      return (
        <span><a target="_blank" className="interest" href={item.link}>{item.name}</a>, </span>
      )
    })

    return (
      <div id="InfoBlock">
        <div id="Personal">
          <div className="Name" onMouseOver={e => this.akaName(e, true)} onMouseOut={e => this.akaName(e,false)}>
            {name}
          </div>
          <div className="Bio">{personal.bio}</div>
          <div className="Activity" onMouseEnter={e => this.changeGreeting(e)} onMouseLeave={e => this.changeGreeting(e)}>
            <span class="greeting" >{greeting}!</span> I'm a
            <span class="age"> {personal.age} </span>
             year old  <a className="employment" href={personal.employment.link}>
              {personal.employment.name}
            </a> working at <a className="where" href={personal.where.link} target="_blank">
              {personal.where.name}
            </a>.
          </div>
          <div className="Interests">
            I am interested in a lot of things, like {ints}
            <button className="more-interests" onClick={e=>this.changeInterests(e)}>...and more</button>
          </div>
          {msg}
          <div className="Welcome">
            Welcome to my wall 😎
          </div>
        </div>
      </div>
    )
  }
}

export class Background extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      x:-64,
      y:-64
    }
    this.tileSize = 64;
  }
  componentWillReceiveProps(props) {
    if (props.position) {
      var {x,y} = props.position;
      var newX = ( Math.floor(x/this.tileSize)- x/this.tileSize )*this.tileSize - this.tileSize;
      var newY = ( y/this.tileSize - Math.floor(y/this.tileSize) )*this.tileSize - this.tileSize;
      this.setState({x:newX, y:newY})
    }
  }
  render(){
    var {x,y} = this.state;
    return (
      <div id="Background">
        <div id="background-images" style={{top:y, left:x}}>

        </div>
      </div>
    )
  }
}
