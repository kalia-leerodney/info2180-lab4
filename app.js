window.onload = function(){
    var searchbtn = document.getElementById("btn");
    searchbtn.addEventListener('click' , function(e) {
        e.preventDefault();
        var hrequest = new XMLHttpRequest();

        var urlcode = "superheroes.php";

        hrequest.onreadystatechange = function() {
            if (hrequest.readyState == XMLHttpRequest.DONE){
                if (hrequest.status == 200) {
                    var hero = hrequest.responseText;
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

