document.getElementById("mobile_menu_btn").addEventListener("click", menusw)

function menusw(){
    
    var x = document.getElementById("mobile_menu_btn")
    var showed = "showed_main_menu"   
    if (x.classList.contains(showed))
       { x.classList.remove(showed)
         document.getElementById("mainlogo").classList.remove(showed)
         document.getElementById("navmenu").classList.remove(showed)
       }
     else {
        x.classList.add(showed)
        document.getElementById("mainlogo").classList.add(showed)
        document.getElementById("navmenu").classList.add(showed)
      } 

}
