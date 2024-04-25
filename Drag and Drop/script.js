const fillColorSpans = document.querySelectorAll('.fill-color span');
const boxes = document.querySelectorAll('.box');

let draggedColor = null;

for(span of fillColorSpans){
    span.addEventListener('dragstart', (e) => {
        draggedColor = e.target.classList[0];
    });
};

for(box of boxes){
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });

    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedColor) {
            e.target.style.backgroundColor = draggedColor;
        }
    });
};
