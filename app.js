const item = document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

 

function dragstart(event){
event.target.classList.add('hold')
setTimeout(()=>event.target.classList.add('hide'),0)
}

function dragend(event){
event.target.className='item'
   
}

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)
}
 function dragover(event){//используются для указания допустимых drop-целей, то есть мест, где могут быть сброшены перетаскиваемые элементы
    event.preventDefault() //это метод объекта события JavaScript, который используется для отмены действия браузера по умолчанию, связанного с определенным событием

 }
 function dragenter(event){//перетаскиваемый элемент достигает конечного элемента
    event.target.classList.add('hovered')
 }
 function dragleave(event){//курсор мыши покидает пределы перетаскиваемого элемента
    event.target.classList.remove('hovered')
 }
 function dragdrop(event){//что происходит, когда значение вот-вот выйдет из области видимости
 event.target.classList.remove('hovered')
  event.target.append(item)
 }