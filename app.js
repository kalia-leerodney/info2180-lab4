window.onload = function(){
    var searchbtn = document.getElementById("btn");
    var hrequest;
    
    searchbtn.addEventListener('click' , function(e) {
        e.preventDefault();
        var hrequest = new XMLHttpRequest();

        var urlcode = "superheroes.php";

        hrequest.onreadystatechange = function() {
            if (hrequest.readyState == XMLHttpRequest.DONE){
                if (hrequest.status == 200) {
                    var hero = hrequest.responseText;
                    /*var list = document.querySelector("#heroes");*/
                    /*list.innerHTML = hero;*/
                    alert(hero);
                } else{
                    alert("Error Detected");
                }

            }
        }

        hrequest.open("GET" , urlcode, true);
        hrequest.send();
    });

}

