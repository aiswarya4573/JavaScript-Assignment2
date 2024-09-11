 
const productContainers = [...document.querySelectorAll(".second-row-container")];
const nxtBtn = [...document.querySelectorAll("#forward-btn")];
const preBtn = [...document.querySelectorAll("#back-btn")];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

allCookies = document.cookie;

document.cookie = "name=oeschger; SameSite=None; domain=ecommerce.com; path=/; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  output.textContent = "";
}

/*document.addEventListener('DOMContentLoaded', function() {
  // Function to create and add the button to a specific div
  function addCookiePreferencesButton() {
      // Get the target div by its class name (or use an ID if preferred)
      var targetDiv = document.querySelector('.video-placeholder-youtube');
      var texte = document.querySelector('.video-placeholder-text-youtube');
      console.log("hi");
      texte.style.display = 'none';
      
      texte.textContent="Youtube (owned by google) requires cookies to be enabled. Please open cookie preferences and enable functional cookies to view the video";

      
      // Ensure the div exists
      if (!targetDiv) {
          console.error('Target div with class "video-placeholder-youtube" not found.');
          return;
      }

      // Create the button element
      var button = document.createElement('button');
      button.id = 'cookie-preferences-button'; // Optional: Can be used to reference the button later
      button.textContent = 'Open Cookie Preferences';
      button.style.backgroundColor = '#000'; // Blue background
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.padding = '10px 20px';
      button.style.fontSize = '16px';
      button.style.cursor = 'pointer';
      button.style.width = '600px';
      button.style.borderRadius = '5px';
      button.style.marginTop = '190px';
      button.style.marginRight = '200px';
      button.style.display = 'block'; // Ensure it is block-level to appear on its own line






      document.addEventListener('cookieyes_banner_load', () => {
                  
                  if (button) {
                  button.addEventListener('click', (event) => {
                  revisitCkyConsent();
                });
              }
            });
            
      

      // Append the button to the target div
      targetDiv.appendChild(button);
  }

  // Call the function to add the button
  addCookiePreferencesButton();
});
*/

document.addEventListener('DOMContentLoaded', function() {
  // Function to create and add the button to a specific div
  function addCookiePreferencesButton() {
      // Get the target div by its class name (or use an ID if preferred)
      var targetDiv = document.querySelector('.video-placeholder-youtube');
      
      // Ensure the target div exists
      if (!targetDiv) {
          console.error('Target div with class "video-placeholder-youtube" not found.');
          return;
      }

      // Create a new div element to hold the text
      var texteDiv = document.createElement('div');
      texteDiv.className = 'video-placeholder-text-youtube';
      texteDiv.style.display = 'none'; // Initially hidden

      // Set the text content inside the newly created div
      texteDiv.textContent = "Youtube (owned by Google) requires cookies to be enabled. Please open cookie preferences and enable functional cookies to view the video";

      // Append the new texte div to the target div
      targetDiv.appendChild(texteDiv);

      // Create the button element
      var button = document.createElement('button');
      button.id = 'cookie-preferences-button'; // Optional: Can be used to reference the button later
      button.textContent = 'Open Cookie Preferences';
      button.style.backgroundColor = '#000'; // Black background
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.padding = '10px 20px';
      button.style.fontSize = '16px';
      button.style.cursor = 'pointer';
      button.style.width = '600px';
      button.style.borderRadius = '5px';
      button.style.marginTop = '190px';
      button.style.marginRight = '200px';
      button.style.display = 'block'; // Ensure it is block-level to appear on its own line

      document.addEventListener('cookieyes_banner_load', () => {
          if (button) {
              button.addEventListener('click', (event) => {
                  revisitCkyConsent();
              });
          }
      });

      // Append the button to the target div
      targetDiv.appendChild(button);
  }

  // Call the function to add the button and texte div
  addCookiePreferencesButton();
});




























    


