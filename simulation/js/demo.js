var i = 0;

function next() {
    const obs = document.getElementById("observations");
    i++;
    if (i == 1) {
        document.getElementById("part1").style.display = "none";
        document.getElementById("part2").style.display = "block";

        // obs.innerHTML = "Current State = <b>0 0 0</b> <br>Input = <b>1</b>"
        document.getElementById("t11").innerHTML="1";
        document.getElementById("t12").innerHTML="1";
        document.getElementById("t13").innerHTML="0 0 0";
    }

    if (i == 2) {
        document.getElementById("part2").style.display = "none";
        document.getElementById("part3").style.display = "block";

        // obs.innerHTML = "Current State = <b>1 0 0</b> <br>Input = <b>1</b>"
        document.getElementById("t21").innerHTML="2";
        document.getElementById("t22").innerHTML="1";
        document.getElementById("t23").innerHTML="1 0 0";
    }

    if (i == 3) {
        document.getElementById("part3").style.display = "none";
        document.getElementById("part4").style.display = "block";

        // obs.innerHTML = "Current State = <b>1 1 0</b> <br>Input = <b>0</b>"
        document.getElementById("t31").innerHTML="3";
        document.getElementById("t32").innerHTML="0";
        document.getElementById("t33").innerHTML="1 1 0";
    }

    if (i == 4) {
        document.getElementById("part4").style.display = "none";
        document.getElementById("part5").style.display = "block";

        // obs.innerHTML = "Current State = <b>0 1 1</b> <br>Input = <b>1</b>"
        document.getElementById("t41").innerHTML="4";
        document.getElementById("t42").innerHTML="1";
        document.getElementById("t43").innerHTML="0 1 1";
    }

    if (i == 5) {
        document.getElementById("part5").style.display = "none";
        document.getElementById("part6").style.display = "block";

        // obs.innerHTML = "Current State = <b>0 1 1</b> <br>Input = <b>0</b>"
        document.getElementById("t51").innerHTML="5";
        document.getElementById("t52").innerHTML="0";
        document.getElementById("t53").innerHTML="0 1 1";
    }

    if (i == 6) {
        document.getElementById("part6").style.display = "none";
        document.getElementById("part7").style.display = "block";

        // obs.innerHTML = "Current State = <b>1 1 1</b> <br>Input = <b>0</b>"
        document.getElementById("t61").innerHTML="6";
        document.getElementById("t62").innerHTML="0";
        document.getElementById("t63").innerHTML="1 1 1";
    }

    if (i == 7) {
        document.getElementById("part7").style.display = "none";
        document.getElementById("part8").style.display = "block";
        document.getElementById("next").setAttribute('disabled', true);

        document.getElementById("finishMessage").innerHTML = "Syndrome computation has been successfully completed. <br> The computed syndrome is <b>101</b>."
        document.getElementById("t71").innerHTML="7";
        document.getElementById("t72").innerHTML="-";
        document.getElementById("t73").innerHTML="<b>1 0 1</b>";

        document.getElementById("box-question").style.padding="11%";

    }
}

function res() {
    
    document.getElementById("next").removeAttribute('disabled');

    document.getElementById("part1").style.display = "block";
    document.getElementById("part2").style.display = "none";
    document.getElementById("part3").style.display = "none";
    document.getElementById("part4").style.display = "none";
    document.getElementById("part5").style.display = "none";
    document.getElementById("part6").style.display = "none";
    document.getElementById("part7").style.display = "none";
    document.getElementById("part8").style.display = "none";

    for (var ii = 1; ii <= 7; ii++) {
        for (var jj = 1; jj <= 3; jj++) {
          var id = "t" + ii + jj;
          document.getElementById(id).innerHTML = "";
        }
      }

      i = 0;
      document.getElementById("finishMessage").innerHTML = "";
      document.getElementById("box-question").style.padding="5%";



}