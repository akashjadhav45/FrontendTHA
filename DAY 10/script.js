let clickedcard = null;
let preventclick = false;
let combo = 0;

const colors = ['pink', 'red', 'yellow', 'blue', 'green', 'orange', 'cyan', 'black'];

const cards = [...document.querySelectorAll('.card')];

for (let color of colors){
    const i = parseInt(Math.random() * cards.length);
    const ca = cards[i];
    cards.splice(i, 1);
    ca.className += ` ${color}`;
    ca.setAttribute('datacolor', color);

    const j = parseInt(Math.random() * cards.length);
    const ba = cards[j];
    cards.splice(j, 1);
    ba.className += `${color}`;
    ba.setAttribute('datacolor', color);
}
function onCardClicked(e){
    const target = e.currentTarget;
    if ( preventclick || target === clickedcard || target.className.includes('done')){
        return;
    }
    target.className = target.className
    .replace('colorhidden', '')
    .trim();
    target.className += ' done';
    if (!clickedcard){
        clickedcard = target;
    } else if (clickedcard){
        if(clickedcard.getAttribute('datacolor') !==target.getAttribute('datacolor')){
            preventclick = true;
            setTimeout(() => {
                clickedcard.className = clickedcard.className.replace('done', '').trim() + ' colorhidden';
                target.className =target.className.replace('done', '').trim() + ' colorhidden';
                clickedcard = null;
                preventclick = false;
            }, 500);
        } else {
            combo++;
            clickedcard = null;
            if(combo === 8){
                alert('YOU WIN !!');
            }
        }
    }
 }