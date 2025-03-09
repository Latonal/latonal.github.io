document.documentElement.setAttribute('lang', navigator.language); // set language depending of navigator

/** Set {animation} to play on {idElem} during {setTime}
 * @param {HTMLElement} idElem id of the element
 * @param {string} animation name of the animation, like "fade-in"/"fade-out"
 * @param {number} setTime time of animation in ms, default 400 */
function Fade(idElem, animation, setTime = 400) {
  idElem.classList.add(animation);
  setTimeout(() => {
    idElem.classList.remove(animation);
  }, setTime);
}

ChangeLanguage(navigator.language);
function ChangeLanguage(lang) {
  // Class
  if (language["class"][lang]) {
    Object.keys(language["class"][lang]).forEach(e => {
      let c = document.getElementsByClassName(e);
      Array.from(c).forEach(element => {
        element.innerHTML = language["class"][lang][e];
      });
    });
  }
  // Id
  if (language["id"][lang]) {
    Object.keys(language["id"][lang]).forEach(e => {
      if (document.getElementById(e)) {
        document.getElementById(e).innerHTML = language["id"][lang][e];
      }
    });
  }
}

function OpenModal(e) {
  e.previousElementSibling.showModal();
}

function CloseModal(e) {
  e.parentNode.closest('dialog').close();
}

let dialogs = document.getElementsByTagName('dialog');
[...dialogs].forEach(e => {
  e.addEventListener('click', function(event) {
    var rect = e.getBoundingClientRect();
    var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      e.close();
    }
  });
});

function Translate() {
  const lg = document.getElementById("lang").innerText;
  const flg = (lg == "EN") ? "EN" : "FR";
  ChangeLanguage(flg.toLowerCase());
}

// default theme depending of browser
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementById("theme-checkbox").checked = true;
}