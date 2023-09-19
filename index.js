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

showProjects();

function showProjects() {
    
    projectListObject.forEach(function (value, index) {
        console.log(value);
        var template = 
        '<div class="project-card">'+
            value.name+
            '<ul>'+
                '<li>Task 1</li>'+
                '<li>Task 2</li>'+
            '</ul>'+
        '</div>';
        document.getElementById('projectList').innerHTML += template; 
        });
    }

    
    function removeCards()  {
        document.getElementById('projectList').innerHTML='none';
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