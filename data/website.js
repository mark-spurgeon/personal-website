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
    }
  }
}
export default settings;
