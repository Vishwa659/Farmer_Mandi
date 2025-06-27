const toggleBtn = document.getElementById('toggleBtn');
const list = document.getElementById('list');

toggleBtn.addEventListener('click', () => {
  list.classList.toggle('show');
});



function showPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function hidePopup(id) {
  document.getElementById(id).style.display = "none";
}
// For logo popup
function showLogoPopup() {
  document.getElementById("logoPopup").style.display = "flex";
}

function hideLogoPopup() {
  document.getElementById("logoPopup").style.display = "none";
}

// for message popup

  window.addEventListener('load', () => {
    const popup = document.getElementById('welcomePopup');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      popup.classList.add('hide');
    }, 2000);
  });
