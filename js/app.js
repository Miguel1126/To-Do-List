const proyects = [];

function showProyects(){
    console.log('Show Proyects');
    let text = '';
    for(let proyect of proyects){
        text += `<li>Task: ${proyect.task} | Date: ${proyect.date}</li>`;
    }
    document.getElementById('proyects').innerHTML = text;
}
function addProyects(){
    const form = document.forms['form'];
    const task = form['task'];
    const date = form['date'];
    if(task.value != '' && date.value != ''){
        const proyect = new Proyect(task.value, date.value);
        console.log(proyect);
        proyects.push(proyect);
        showProyects();
    }
    else{
        
        console.log('error')
    }
}
