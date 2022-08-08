const smallOne = document.getElementById('small1');

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