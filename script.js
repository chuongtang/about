

const projectList = [
    'UnsplashAPI-InfiniteScroll', 
    'JokeMachine',
    'CustomCountdown',
    'LightDarkMode'
  
]
const gitName = 'https://github.com/chuongtang/';
const liveName = 'https://chuongtang.github.io/';


function openLinktoNewPage (item, index){
    window.open (`${item}${projectList[index]}`); 
}
const openPopover =(event,popoverID)=> {
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    let popper = Popper.createPopper(element, document.getElementById(popoverID), {
      placement: 'top'
    });
    console.log("poper", popoverID);
    
    document.getElementById(popoverID).classList.toggle("hidden");
    
  }