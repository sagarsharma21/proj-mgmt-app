function toggleMenu() {    
    var toggleSwitch = document.getElementsByClassName('menu')[0];

    if(toggleSwitch.style.display == ''){
        toggleSwitch.style.display = 'none';
    }
    else{
        toggleSwitch.style.display = '';
    }
}

var projectListObject = [
  { 
    name: "Project One" 
  },
  {
    name: "Project Two",
  }
];

showProjects('projectList');

function showProjects(idGenerator) {
    
    projectListObject.forEach(function (value, index) {
        console.log(value);
        var template = 
        '<div class="project-card">'+ value.name+
            '<ul>'+
                '<li>Task 1</li>'+
                '<li>Task 2</li>'+
            '</ul>'+
        '</div>';

        if (idGenerator) {
            document.getElementById(idGenerator).innerHTML += template;
        } else {
         
            document.getElementById('projectList').innerHTML += template;   
        } 
        });
    }

    
    function removeCards()  {
        document.getElementById('projectList').innerHTML='card removed';
    }


    var idName = 1;
    function addBoard(id) {
    
        idName++;
        console.log(id.value);
        var idGenerator = 'projectList_'+idName;
        console.log(idGenerator);
        var boardTemplate = '<section class="board-block" style="margin-top: 5px; padding-top: 2px;">'+
                                '<div>Board Name:'+id.value+'<button onclick="removeCards()">Remove card</button></div>'+
                                '<div class="project-block" style="border: 2px solid rgb(130, 185, 20); margin :2px; padding: 2px;"'+
                                'id='+ idGenerator+'>'+
                                '</div>'+
                            '</section>';
        document.getElementById('boardBlockList').innerHTML += boardTemplate;
        showProjects(idGenerator);
    }
// function showProject() {
    
//     var template = 
//     '<div class="project-card">'+
//         ' <span>Added dynamically</span>'+
//         '<ul>'+
//             '<li>Task 1</li>'+
//             '<li>Task 2</li>'+
//         '</ul>'+
//     '</div>';
//     document.getElementById('projectList').innerHTML += template; 
// }