let theme = localStorage.getItem('theme');
console.log(theme)
if(theme==='light'){
    enableLightMode() 
  }else{
    enableDarkMode()  
  }

function changeMode(){
    if(theme==='light'){
      enableDarkMode()  
    }else{
      enableLightMode()  
    }
   if(body.classList.contains('dark-theme')){
    darkModeBtn.innerHTML="<i class='bx bxs-sun'></i> "
   }else{
    darkModeBtn.innerHTML="<i class='bx bxs-moon'></i>"
   }
}

function enableLightMode(){
    body.classList.remove('dark-theme')
    theme='light' 
    localStorage.setItem('theme','light')
}

function enableDarkMode(){
    body.classList.add('dark-theme')
    theme='dark'
    localStorage.setItem('theme','dark')
}