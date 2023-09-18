function toggleMenu() {
    
var toggleSwitch = document.getElementsByClassName('menu')[0];

if(toggleSwitch.style.display == ''){
    toggleSwitch.style.display = 'none';
}
else{
    toggleSwitch.style.display = '';
}
}