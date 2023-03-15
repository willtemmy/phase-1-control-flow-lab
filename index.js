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

  let mess = city === 'NYC'? "Ok, sounds good.":"No go.";

  return mess;
}

function switchOnCharmFromTip(tip){
  let thanks
  switch (tip) {
    case 'generous':
      thanks = "Thank you so much.";
      break;

      case 'not as generous':
      thanks = 'Thank you.';
      break;
  
    default:
      thanks = "Bye.";
      break;
  }

  return thanks;
}