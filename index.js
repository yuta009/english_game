
const { h, app } = hyperapp
for(let i in hyperappHtml){eval(`${i} = hyperappHtml.${i}`)}

const state = {
  words: [
    ["apple", "りんご"],
    ["pen", "ペン"],
    ["phone", "電話"],
    ["orange", "オレンジ"],
  ]
}

const actions = {
  random: () => state => ({
    words: shuffle(state.words)
  })
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const view = (state, actions) =>
  div({oncreate: actions.random}, [
    table(state.words.map(word => Word(word))),
    button({onclick: actions.random}, "random")
  ])

const Word = word =>
  tr([
    td(word[0]),
    td(word[1]),
  ])

window.onload = () => {
  a = app(state, actions, view, document.body)
}
