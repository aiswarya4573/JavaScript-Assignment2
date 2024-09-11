 
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


document.addEventListener('DOMContentLoaded', function() {
  // Get the YouTube placeholder div by its class name
  var videoPlaceholder = document.querySelector('.video-placeholder-youtube');
  
  // Ensure the video placeholder exists
  if (!videoPlaceholder) {
    console.error('Video placeholder not found.');
    return;
  }

  // Create the overlay div
  var overlayDiv = document.createElement('div');
  overlayDiv.className = 'overlay';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.width = '100%';
  overlayDiv.style.height = '100%';
  overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark translucent overlay
  overlayDiv.style.color = 'white';
  overlayDiv.style.display = 'flex';
  overlayDiv.style.alignItems = 'center';
  overlayDiv.style.justifyContent = 'center';
  overlayDiv.style.flexDirection = 'column';
  overlayDiv.style.textAlign = 'center';

  // Create and append the heading
  var heading = document.createElement('h2');
  heading.textContent = 'YouTube Privacy';
  heading.style.fontSize = '28px';
  heading.style.marginBottom = '15px';
  overlayDiv.appendChild(heading);

  // Create and append the paragraph with a link
  var paragraph = document.createElement('p');
  paragraph.style.fontSize = '16px';
  paragraph.style.marginBottom = '20px';
  paragraph.innerHTML = 'YouTube (owned by Google) requires cookies to be enabled. Please open <a href="#" id="cookie-link" style="color: #00aaff; text-decoration: underline;">Cookie Preferences</a> and enable Functional cookies to view the video.';
  overlayDiv.appendChild(paragraph);

  // Create and append the button
  var button = document.createElement('button');
  button.id = 'cookie-preferences-button';
  button.textContent = 'Open Cookie Preferences';
  button.style.backgroundColor = '#000'; // Black background
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';
  button.style.marginTop = '10px';
  overlayDiv.appendChild(button);

  // Append the overlay to the video placeholder
  videoPlaceholder.style.position = 'relative'; // Make sure the parent is positioned relatively
  videoPlaceholder.appendChild(overlayDiv);

  // Add event listeners to the button and link
  document.getElementById('cookie-preferences-button').addEventListener('click', function() {
    // Function to open cookie preferences
    revisitCkyConsent(); // Assuming revisitCkyConsent() is defined for handling cookie preferences
  });

  document.getElementById('cookie-link').addEventListener('click', function(event) {
    event.preventDefault();
    // You can also trigger cookie preferences from the link if needed
    revisitCkyConsent(); // Handle click event
  });
});
*/
document.addEventListener('DOMContentLoaded', function() {
  // Get the YouTube placeholder div by its class name
  var videoPlaceholder = document.querySelector('.video-placeholder-youtube');
  
  // Ensure the video placeholder exists
  if (!videoPlaceholder) {
    console.error('Video placeholder not found.');
    return;
  }

  // Hide the existing content inside the video placeholder
  var existingContent = videoPlaceholder.querySelectorAll('p, button');
  existingContent.forEach(function(element) {
    element.style.display = 'none'; // Hides the paragraph and button inside the placeholder
  });

  // Create the overlay div
  var overlayDiv = document.createElement('div');
  overlayDiv.className = 'overlay';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.width = '100%';
  overlayDiv.style.height = '100%';
  overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark translucent overlay
  overlayDiv.style.color = 'white';
  overlayDiv.style.display = 'flex';
  overlayDiv.style.alignItems = 'center';
  overlayDiv.style.justifyContent = 'center';
  overlayDiv.style.flexDirection = 'column';
  overlayDiv.style.textAlign = 'center';

  // Create and append the heading
  var heading = document.createElement('h2');
  heading.textContent = 'YouTube Privacy';
  heading.style.fontSize = '28px';
  heading.style.marginBottom = '15px';
  overlayDiv.appendChild(heading);

  // Create and append the paragraph with a link
  var paragraph = document.createElement('p');
  paragraph.style.fontSize = '16px';
  paragraph.style.marginBottom = '20px';
  paragraph.innerHTML = 'YouTube (owned by Google) requires cookies to be enabled. Please open <a href="#" id="cookie-link" style="color: #00aaff; text-decoration: underline;">Cookie Preferences</a> and enable Functional cookies to view the video.';
  overlayDiv.appendChild(paragraph);

  // Create and append the button
  var button = document.createElement('button');
  button.id = 'cookie-preferences-button';
  button.textContent = 'Open Cookie Preferences';
  button.style.backgroundColor = '#000'; // Black background
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';
  button.style.marginTop = '10px';
  overlayDiv.appendChild(button);

  // Append the overlay to the video placeholder
  videoPlaceholder.style.position = 'relative'; // Make sure the parent is positioned relatively
  videoPlaceholder.appendChild(overlayDiv);

  // Add event listeners to the button and link
  document.getElementById('cookie-preferences-button').addEventListener('click', function() {
    // Function to open cookie preferences
    revisitCkyConsent(); // Assuming revisitCkyConsent() is defined for handling cookie preferences
  });

  document.getElementById('cookie-link').addEventListener('click', function(event) {
    event.preventDefault();
    // You can also trigger cookie preferences from the link if needed
    revisitCkyConsent(); // Handle click event
  });
});





























    


