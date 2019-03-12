function calculateAge(birthdayString) { // birthday is a date
  var birthday=new Date(birthdayString);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const settings = {
  name:"Mark Spurgeon",
  title:"Marko's Virtual Wall",
  lastUpdate:"March 12th 2019",
  personal:{
    name:"Mark Spurgeon",
    aka:"Marko",
    age:calculateAge('1996-12-27'),
    employment:{
      name:"Geography Student",
      link:"#"
    },
    where: {
      name:"the University of Geneva",
      location:"Switzerland",
      link:"https://www.unige.ch/en/university/presentation/"
    }
  }
}
export default settings;
