console.log("oshu");
// // Get the current page URL
// var currentPage = window.location.pathname;

// // Check if the current page is the index page
// if (currentPage === "/home.html" || currentPage === "/") {
//     // Add a class to the sidebar to make it visible
//     document.getElementById("sidebar").classList.add("visible");
// } else {
//     // Remove the class to hide the sidebar on other pages
//     document.getElementById("sidebar").classList.remove("visible");
// }

 document.querySelector('.cross').computedStyleMap.display = "none";
 document.querySelector('.hambargar').addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector (".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display ="inline"
        document.querySelector(".cross").style.display ="none"
    }
    else{
        document.querySelector(".ham").style.display = "none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display = "inline"
        }, 350); 
    }
 });
 
