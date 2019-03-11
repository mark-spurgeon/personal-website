import website, {greetings} from '../data/website'

export function Info() {
  var {personal} = website;
  var randomIndex = Math.floor((Math.random() * 9) + 1);
  var greeting = greetings[randomIndex]
  return (
    <div id="InfoBlock">
      <div id="Personal">
        <div className="Name">{personal.name}</div>
        <div className="Bio">{personal.bio}</div>
        <div className="Activity"><span class="greeting">{greeting}!</span> I'm a
          <span class="age"> {personal.age} </span>
           year old  <a className="employment" href={personal.employment.link}>
            {personal.employment.name}
          </a> working at the <a className="where" href={personal.where.link} target="_blank">
            {personal.where.name}
          </a>.
        </div>
        <div className="Interests">
          I am interested in a lot of things, like
        </div>
        <div className="Welcome">
          Welcome to my wall 😎
        </div>
      </div>
    </div>
  )
}
