// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    id: '50262872',
    english: 'Hi',
    polish: 'Cześć',
  },
  {
    id: '79257101',
    english: 'Good morning',
    polish: 'Dzień dobry',
  },
  {
    id: '79257102',
    english: 'chair',
    polish: 'krzesło',
  },
  {
    id: '79257103',
    english: 'bad',
    polish: 'łóżko',
  },
  {
    id: '79257104',
    english: 'fridge',
    polish: 'lodówka',
  },
];
