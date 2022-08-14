const smallOne = document.getElementById('small1');
const bigBox = document.getElementById('big-box');
const smallTwo = document.getElementById('small2');

small2.addEventListener('click', () => {
    
});

bigBox.addEventListener('click', () => {
    const div = document.createElement('div');
    div.textContent = 'ha! fuck u boyo u don get 2 no lolol';
    div.classList.add('visible-on-click');
});


let getGoodText = [
`function getGood(student, school) {
    const education = document.createElement('alchemy');
    const discipline = 'excellent;
    if (school === Alchemy && student === you) {
        knowledge++;
        satisfaction++;
        jobOffers++;
    } else {
        alert('good luck!');
    }
}`
];

smallOne.addEventListener('click', () => {
    
    smallOne.textContent = '';

    const getGood = document.createElement('pre');
    getGood.textContent = `${getGoodText}`;
    getGood.classList.add('visible');
    smallOne.append(getGood);
});