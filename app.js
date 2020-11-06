window.onload = function(){
    var searchbtn = document.getElementById("btn");
    
    searchbtn.addEventListener('click' , function(e) {
        e.preventDefault();
        var searchquery = document.getElementById("superheroes").value;
        var hrequest = new XMLHttpRequest();

        var urlcode = "superheroes.php?query=" + searchquery;


        hrequest.onreadystatechange = function() {
            if (hrequest.readyState == XMLHttpRequest.DONE){
                if (hrequest.status == 200) {
                    var hero = hrequest.responseText;
                    var result = document.getElementById("result");
                    result.innerHTML = hero;

                } else{
                    alert("Error Detected");
                }

            }
        }

        hrequest.open("GET" , urlcode, true);
        hrequest.send();
    });

}

