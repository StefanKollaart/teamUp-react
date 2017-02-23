export default function createClassDay(user) {

  const dateObject = new Date();
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  console.log(year + "-" + month + "-" + day);
  return year + "-" + month + "-" + day;
  
}
