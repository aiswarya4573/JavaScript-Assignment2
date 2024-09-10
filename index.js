 
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
document.addEventListener('DOMContentLoaded', function() {
  // Function to check if cookies are accepted
  function cookiesAccepted() {
      // Modify this based on your CookieYes configuration or your cookie consent check logic
      return document.cookie.includes('cookieConsent=true');
  }

  // Function to toggle the overlay based on cookie consent
  function toggleOverlay() {
      var overlay = document.getElementById('overlay');
      if (cookiesAccepted()) {
          overlay.classList.add('hidden');
      } else {
          overlay.classList.remove('hidden');
      }
  }

  // Function to navigate to cookie preferences
  function goToCookiePreferences() {
      // Adjust this based on the actual API provided by CookieYes
      if (window.CookieYes && typeof CookieYes.openCookieSettings === 'function') {
          CookieYes.openCookieSettings();
      } else {
          alert('Cookie preferences not available. Please check your CookieYes setup.');
      }
  }

  // Event listener for the button
  var button = document.getElementById('cookie-preferences-button');
  if (button) {
      button.addEventListener('click', goToCookiePreferences);
  }

  // Run the function after CookieYes has loaded
  window.onload = function() {
      toggleOverlay();
  };
});



























    


