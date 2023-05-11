const html_code = document.querySelector('#html');
const css_code = document.querySelector('#css');
const js_code = document.querySelector('#javascript');

const output = document.querySelector('#output');

//initiate empty items to Local Storage preventing undefined input values
localStorage.setItem('htmlCode', '');
localStorage.setItem('cssCode', '');
localStorage.setItem('jsCode', '');

function run() {
    // storing data in Local Storage
    localStorage.setItem('htmlCode', html_code.value);
    localStorage.setItem('cssCode', css_code.value);
    localStorage.setItem('jsCode', js_code.value);

    // executing & evaluating html, css & js
    output.contentDocument.body.innerHTML =
        `<style>${localStorage.cssCode}</style>` +
        localStorage.htmlCode;
    output.contentWindow.eval(localStorage.jsCode);
}

// run evaluation if inputs changed
html_code.addEventListener("keyup", (e) => run());
css_code.addEventListener("keyup", (e) => run());
js_code.addEventListener("keyup", (e) => run());

//fill inputs with existing items
html_code.value = localStorage.htmlCode;
css_code.value = localStorage.cssCode;
js_code.value = localStorage.jsCode;