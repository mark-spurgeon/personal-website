import React from 'react'

import website from '../data/website'
import greetings from '../data/greetings'
import interests from '../data/interests'


export class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:website.personal.name,
      personal:website.personal,
      greeting:this.getGreeting(),
      interests:this.getInterests()
    }
    this.akaName = this.akaName.bind(this);
    this.changeGreeting = this.changeGreeting.bind(this);
    console.log(this.getInterests());
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
    this.setState({greeting:this.getGreeting()})
  }
  changeInterests(e) {
    e.preventDefault();
    this.setState({interests:this.getInterests()})
  }


  getGreeting(){
    var randomIndex = Math.floor((Math.random() * (greetings.length-1)) + 1);
    var greeting = greetings[randomIndex]
    return greeting;
  }
  getInterests(){
    var ints = [...interests];
    var index1 = Math.floor((Math.random() * (ints.length-1)) + 1);
    var int1 = ints[index1]
    ints.splice(index1, 1);
    var index2 = Math.floor((Math.random() * (ints.length-1)) + 1);
    var int2 = ints[index2]
    ints.splice(index2, 1);
    var index3 = Math.floor((Math.random() * (ints.length-1)) + 1);
    var int3 = ints[index3]
    return [int1, int2, int3];
  }

  render(){
    var {
      name,
      personal,
      greeting,
      interests
    } = this.state;
    return (
      <div id="InfoBlock">
        <div id="Personal">
          <div className="Name" onMouseOver={e => this.akaName(e, true)} onMouseOut={e => this.akaName(e,false)}>
            {name}
          </div>
          <div className="Bio">{personal.bio}</div>
          <div className="Activity" onMouseOver={e => this.changeGreeting(e)}>
            <span class="greeting" >{greeting}!</span> I'm a
            <span class="age"> {personal.age} </span>
             year old  <a className="employment" href={personal.employment.link}>
              {personal.employment.name}
            </a> working at the <a className="where" href={personal.where.link} target="_blank">
              {personal.where.name}
            </a>.
          </div>
          <div className="Interests">
            I am interested in a lot of things, like
              <a target="_blank" className="interest" href={interests[0].link}> {interests[0].name} </a>,
              <br/><a target="_blank" className="interest" href={interests[1].link}> {interests[1].name} </a>
              and<a target="_blank" className="interest" href={interests[2].link}> {interests[2].name} </a>

            <button className="more-interests" onClick={e=>this.changeInterests(e)}>...and more</button>
          </div>
          <div className="Welcome">
            Welcome to my wall 😎
          </div>
        </div>
      </div>
    )
  }
}
