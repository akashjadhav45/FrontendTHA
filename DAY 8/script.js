var Grid = document.querySelector('.grid');
window.onload = () => {
    for (let i=0;i<16;i++){
        var row = document.createElement('div');
        row.className = 'row';
        Grid.appendChild(row);
        for (let j=0;j<16;j++){
            var col = document.createElement('div');
            col.className = 'col';
            row.appendChild(col);
        }
    }
}
setTimeout(() => {
    var cols = document.querySelectorAll('.col');
    cols.forEach(col => {
        col.addEventListener('click', () => {
            col.classList.toggle('white');
        });
    });
}, 1)