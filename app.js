window.onload = function(){
    var searchbtn = document.getElementById("btn");
    var hrequest;
    
    searchbtn.addEventListener('click' , function(e) {
        e.preventDefault();
        hrequest = new XMLHttpRequest();

        var urlcode = "superheroes.php";
        var handleChange = function() {
            if (hrequest.readyState == XMLHttpRequest.DONE && hrequest.status == 200){
                var hero = hrequest.responseText;
                var list = document.querySelector("#list");
                list.innerHTML = hero;
                alert(hero);

            }

            else{
                alert("Error Detected");
            }

        }
        hrequest.open("GET" , urlcode, true);
        hrequest.onreadystatechange = handleChange;
        hrequest.send();
    });

  



    


}