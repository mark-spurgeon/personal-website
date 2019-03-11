function calculateAge(birthdayString) { // birthday is a date
  var birthday=new Date(birthdayString);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const settings = {
  name:"Mark Spurgeon",
  title:"Marko's Personal Website",
  personal:{
    name:"Mark Spurgeon",
    aka:"Marko",
    age:calculateAge('1996-12-27'),
    employment:{
      name:"Geography Student",
      link:"#"
    },
    where: {
      name:"University of Geneva",
      location:"Switzerland",
      link:"https://unige.ch"
    },
    links: [
      {
        name:"Instagram",
        link:"http://instagram.com/marko.studio"
      },
      {
        name:"YouTube",
        link:"http://instagram.com/marko.studio"
      },
      {
        name:"Github",
        link:"https://github.com/the-duck"
      },
      {
        name:"Topolitique",
        link:"https://topolitique.ch"
      }
    ]
  },
  interests: [
    {
      name:"Art",
      link:"http://instagram.com/marko.studio"
    },
    {
      name:"3D Art",
      link:"http://markspurgeon.ch/old/markspurgeon"
    },
    {
      name:"Short Films",
      link:"https://vimeo.com/145537206"
    },
    {
      name:"Programming",
      link:"https://github.com/the-duck"
    },
    {
      name:"React JS in Webpages",
      link:"https://github.com/the-duck/react-embedded"
    },
    {
      name:"Website Design",
      link:"https://github.com/the-duck/topolitik"
    },
    {
      name:"Journalism",
      link:"https://topolitique.ch"
    },
    {
      name:"Website Design",
      link:"https://github.com/the-duck/topolitik"
    },
  ]
}
export default settings;

export const greetings = [
  "Hello",
  "Hi",
  "Bonjour",
  "Tchô",
  "Guten tag",
  "Saluton",
  "✌️",
  "🖐",
  "🖖",
  "🤝"
]
