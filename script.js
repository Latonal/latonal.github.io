//#region Input Range
const rangeInputs = document.getElementsByClassName('input-skills');

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

Array.from(rangeInputs).forEach(input => {
  input.addEventListener('input', handleInputChange);
  input.style.backgroundSize = (input.value - input.min) * 100 / (input.max - input.min) + '% 100%';
});
//#endregion Input Range






// /** Set {animation} to play on {idElem} during {setTime}
//  * @param {HTMLElement} idElem id of the element
//  * @param {string} animation name of the animation, like "fade-in"/"fade-out"
//  * @param {number} setTime time of animation in ms, default 400 */
//  function Fade(idElem, animation, setTime = 400) {
//     idElem.classList.add(animation);
//     setTimeout(() => {
//         idElem.classList.remove(animation);
//     }, setTime);
// }

// document.documentElement.setAttribute('lang', navigator.language); // set language depending of navigator

// let coll = document.getElementsByClassName("collapsible");
// for(let i = 0; i < coll.length; i++) { // https://www.w3schools.com/howto/howto_js_collapsible.asp
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxWidth) {
//             content.style.maxWidth = null;
//         } else {
//             content.style.maxWidth = "0px";
//         }
//     });
// }

// ChangeLanguage(navigator.language);
// function ChangeLanguage(lang) {
//     Object.keys(language["unique"][lang]).forEach(e => {
//         console.log(e);
//         document.getElementById(e).innerHTML = language["unique"][lang][e];
//     });
//     Object.keys(language["multiple"][lang]).forEach(m => {
//         let e = document.getElementById("cards").getElementsByClassName(m);
//         for (let i = 0; i < language["multiple"][lang][m].length; i++) {
//             e[i].innerHTML = language["multiple"][lang][m][i];
//         }
//     });
//     AddEventReadMore();
// }

// function OpenPopin() {
//     if (document.getElementById("parameters-popin").classList.contains("active")) return;
//     document.getElementById("parameters-popin").classList.add("active");
//     Fade(document.getElementById("parameters-popin"), "fade-in");
// }

// function ClosePopin(e) {
//     if (!document.getElementById("parameters-popin").classList.contains("active")) return;
//     if (e.target.classList.contains("popin") || e.target.parentNode.classList.contains("popin")) return;
//     Fade(document.getElementById("parameters-popin"), "fade-out");
//     setTimeout(() => {
//         document.getElementById("parameters-popin").classList.remove("active");
//     }, 400);
// }
// document.addEventListener('click', ClosePopin);

// AddEventReadMore();
// function AddEventReadMore() {
//     let rm = document.getElementById("cards").getElementsByTagName("a");
//     Array.from(rm).forEach(r => {
//         r.addEventListener('click', function(event) { event.preventDefault(); });
//         r.addEventListener('click', OpenReadMore);
//     });
// }

// function OpenReadMore(e) {
//     if (e.target.tagName == "SPAN") {
//         console.log(e.target, true);
//         document.getElementById("popup-readmore").getElementsByTagName("h3")[0].innerHTML = e.target.parentNode.getElementsByTagName("h3")[0].innerHTML;
//         document.getElementById("popup-readmore").getElementsByClassName("content-readmore")[0].innerHTML = e.target.parentNode.getElementsByTagName("div")[0].innerHTML;
//         SetPopupReadMore(true);
//     } else {
//         if (e.target.tagName == "A") window.open(e.target.href);
//         else if (e.target.parentNode.tagName == "A") window.open(e.target.parentNode.href)
//         else if (e.target.parentNode.parentNode.tagName == "A") window.open(e.target.parentNode.parentNode.href);
//     }
// }

// function SetPopupReadMore(bool) {
//     console.log('readmore ! ' + bool);
//     if (bool) {
//         Fade(document.getElementById("popup-readmore"), "fade-in");
//         document.getElementById("popup-readmore").removeAttribute("hidden");
//         document.getElementById("popup-readmore").classList.add("active");
//     }
//     else {
//         Fade(document.getElementById("popup-readmore"), "fade-out");
//         setTimeout(() => {
//             document.getElementById("popup-readmore").setAttribute("hidden", true);
//             document.getElementById("popup-readmore").classList.remove("active");
//         }, 400);
//     }
// }