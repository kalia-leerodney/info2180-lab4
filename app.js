window.onload = function(){
    var searchbtn = document.getElementById("btn");
    searchbtn.addEventListener("click", function(e){
        var httpxl = new XMLHttpRequest();
        var url = "superheroes.php";
        httpxl.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var superHeroesArray = this.responseText;
                var p = "";
                var x;
                var v = "<ul>"
                for(x = 0; x = superHeroesArray.length ; x++){
                    p += v + "<li>" + superHeroesArray[x] + "<li>";
                }

                document.getElementById("list").innerHTML = p;
                alert(p);
            }
        }
        httpxl.open("GET" , url , true);
        httpxl.send();

    });


}