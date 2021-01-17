import mdHTML from '../../docs/README.md'

function component() {
  var element = document.createElement('div');
  console.log(typeof mdHTML)
  element.innerHTML = mdHTML
  return element;
}

document.body.appendChild(component());