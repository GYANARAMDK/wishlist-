let todoinput=document.querySelector('.input');
let addtodobutton=document.querySelector('.button');
let showtools=document.querySelector('.todos-container');
let todo;
let todolist=[];
function uuid(){
        return 'xxxxxxxx'.replace(/[xy]/g,function(param){
            let number = Math.random()*8|0;
            let randomnumber=param=='x'?number:(number & 0*3 | 0*B);
            return randomnumber.toString(8);
        });
}
addtodobutton.addEventListener('click',(e)=>{
    e.preventDefault();
    todo=todoinput.value;
    if(todo.length>0)
   { 
     todolist.push({id:uuid(),todo,iscompleted: false})
   }
   console.log(todolist);
   rendertodolist(todolist);
})
showtools.addEventListener('click',(e)=>{
    console.log("clicked");
    let key=e.target.dataset.key;
    console.log(key);
    console.log(e.target)
})
function rendertodolist(todolist){
    console.log(todolist);
    showtools.innerHTML=todolist.map(todo=> `<div><input id="${todo.id} type="checkbox"  /> <label class="todo"  >${todo.todo}</lable> <button>delete</button></div>`)
   
}
rendertodolist(todolist)