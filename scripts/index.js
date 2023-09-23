    var xhr = new XMLHttpRequest();
    //getBoards();
    
    //function to get boards and display on UI using GET request
    function getBoards() {
        xhr.open('GET','http://localhost:8080/api/v1/boards');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        var access = sessionStorage.getItem('access-token');
        xhr.setRequestHeader('Authorization', 'Bearer' + access);
        xhr.send();
        xhr.onreadystatechange = function () {
            //console.log(xhr.responseText);
            if(xhr.readyState === 4) {
                var boardList = JSON.parse(xhr.responseText);
                //console.log(boardList.boards);
            //document.getElementById('boardBlockList').innerHTML = '<p>Board List</p>'    
            
            var listTemplate = '<span></span>';
            var boards = boardList.boards;
            boards.forEach(function(value, index) {
                console.log(value.name);
                document.getElementById('boardBlockList').innerHTML += '<div id='+ value.id +' onclick=showProjects('+ value.id +');>'+value.name+'</div>';
                //showProjects(value.id); /multiple API calls in a loop not allowed by browser
                });
            }
        };

    }

    //function to add boards dynamically using POST request
    function addBoardAPI(element) {
        var userDetail  = JSON.parse(sessionStorage.getItem('user-detail'));
        var parameter = {
            "description":"string",
            "name": element.value, //"name":"string",
            "owner_id":  userDetail.id //"owner_id":"string"
        };

        xhr.open('POST', 'http://localhost:8080/api/v1/boards');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        var access = sessionStorage.getItem('access-token');
        xhr.setRequestHeader('Authorization' ,"Bearer" + access);
        xhr.send(JSON.stringify(parameter));

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                //var boardList = JSON.parse(xhr.responseText);
                getBoards();
            }
        };

    }

    //toggle menu visibility
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

    //function to show project list when clicked by user      /
    function showProjects(cardIdGen) {

        xhr.open('GET', 'http://localhost:8080/api/v1/boards/'+cardIdGen+'/project');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        var access = sessionStorage.getItem('access-token');
        xhr.setRequestHeader('Authorization', 'Bearer' + access);
        xhr.send();

        xhr.onreadystatechange= function() {
            if (xhr.readyState === 4) {    
               // console.log(xhr.responseText);
               var projectList = JSON.parse(xhr.responseText);
               var projects = projectList.projects;
               //console.log(projectList);

               projects.forEach(function (value, index) {
                console.log(value);
                var template = 
                '<div class="project-card">'+ value.name+
                    '<ul>'+
                        '<li calss="task-list">Task 1</li>'+
                        '<li class="task-list">Task 2</li>'+
                    '</ul>'+
                '</div>';
                    document.getElementById(cardIdGen).innerHTML += template;
                });
            }
        };
    }

    
    function removeCards()  {
        document.getElementById('projectList').innerHTML='card removed';
    }


    var idName = 1;
    function addBoard(id) {
            if (id.value.length < 5) {
                alert("Board name can't be less than five characters!");
                return;
            } else {
                
        idName++;
        console.log(idName );

        var cardIdGen = 'projectList_'+idName;  //listID = cardIdGen
        console.log(cardIdGen);

        var boardIdGen = 'board_'+idName ;
        var boardTemplate = '<section class="board-block" id='+boardIdGen+' style="margin-top: 5px; padding-top: 2px;">'+
                                '<div>Board Name:'+id.value+'<button onclick="removeCards('+cardIdGen+')" id="removeCardBtn" >Remove card</button></div>'+
                                '<div class="project-block" style="border: 2px solid rgb(130, 185, 20); margin :2px; padding: 2px;"'+
                                'id='+ cardIdGen+'>'+
                                '</div>'+
                            '</section>';
        document.getElementById('boardBlockList').innerHTML += boardTemplate;
        showProjects(cardIdGen);
        console.log(id.value+" bugfix")

        document.getElementById('menu-list').innerHTML += '<li onclick="loadMenu('+boardIdGen+')">'+id.value+'<hr></li>';
                  alert("Board name " + id.value + " added!");
                  id.value=id.defaultValue;  
                    }
    }

    function loadMenu(element) {
        console.log(element.id);
        document.getElementById(element.id).style.display='block';
    }
// function showProject() {` //deprecated
    
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

// if (cardIdGen) { //deprecated
//     document.getElementById(cardIdGen).innerHTML += template;
// } else {
 
//     document.getElementById('projectList').innerHTML += template;   
// } 