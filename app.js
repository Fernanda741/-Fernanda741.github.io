//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
//https://www.codegrepper.com/code-examples/javascript/frameworks/nextjs/alert+box+with+ok+and+cancel
let inputs = document.querySelectorAll('input')
let spans = document.querySelectorAll('span')


document.querySelector('#btn-verify').onclick = function() {

    var proceed = confirm("Are you sure you want to proceed?");

    if (proceed) {

        inputs[2].classList.add('correto')
        inputs[5].classList.add('correto')

        spans[0].classList.add('aparece')
        spans[1].classList.add('aparece')


    }

}