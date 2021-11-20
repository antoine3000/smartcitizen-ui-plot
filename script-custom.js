/*
CUSTOM SCRIPTS
*/

// index gradients for moisture level
function moistureGradients(id, value) {
  let list = document.getElementById('list');
  if (list) {
    console.log(value);
    if (value >= 95) {
      document.getElementById(id).style.background = settings.styles.colorTrue;
    } else if (value <= 5) {
      document.getElementById(id).style.background = settings.styles.colorFalse;
    } else {
      document.getElementById(id).style.background = 'linear-gradient(0deg, '+ settings.styles.colorTrue +' 0%, '+ settings.styles.colorFalse +' '+ value +'%)';  
    }
  }
}

// detail additional content
function addAdditionalContent(id) {
  for (let i = 0; i < settingsCustom.sensors.length; i++) {
    if (id === settingsCustom.sensors[i].id) {
      let sensor = settingsCustom.sensors[i];
      // title
      document.querySelector("#title span:last-child").innerHTML = sensor.title;
      // subtitle
      document.querySelector("#subtitle").innerHTML = sensor.description;
      // image
      let img = document.createElement('img');
      img.src = sensor.image;
      document.querySelector("#header").appendChild(img);
      // button
      let button = document.createElement('a');
      button.setAttribute('href', sensor.buttonUrl);
      button.innerHTML = sensor.buttonText;
      document.querySelector("#main").appendChild(button);
      break;
    }
  }
}