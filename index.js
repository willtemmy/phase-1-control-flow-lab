function scuberGreetingForFeet(distance){
  let message
  if(distance<=400){
    message = "This one is on me!";
  }else if(distance>2000 && distance<=2500){
    message = "I will gladly take your thirty bucks.";
  }else if(distance>2500){
    message = "No can do.";
  }

  return message;
  
}


function ternaryCheckCity(city){
  const newc = "NYC";
  let mess
  if(city === newc){
    mess = "Ok, sounds good.";
  }else{
    mess = "No go.";
  }

  return mess;
}

function switchOnCharmFromTip(tip){
  let thanks
  if (tip === 'generous') {
    thanks = "Thank you so much.";
  }else if (tip === 'not as generous') {
    thanks = 'Thank you.';
  }else{
    thanks = "Bye.";
  }

  return thanks;
}