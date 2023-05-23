var i = 0;

function next() {
    const obs = document.getElementById("observations");
    i++;
    if (i == 1) {
        document.getElementById("part1").style.display = "none";
        document.getElementById("part2").style.display = "block";

        obs.innerHTML = "Current State = <b>0 0 0</b> <br>Input = <b>1</b>"

    }

    if (i == 2) {
        document.getElementById("part2").style.display = "none";
        document.getElementById("part3").style.display = "block";

        obs.innerHTML = "Current State = <b>1 0 0</b> <br>Input = <b>1</b>"
    }

    if (i == 3) {
        document.getElementById("part3").style.display = "none";
        document.getElementById("part4").style.display = "block";

        obs.innerHTML = "Current State = <b>1 1 0</b> <br>Input = <b>0</b>"
    }

    if (i == 4) {
        document.getElementById("part4").style.display = "none";
        document.getElementById("part5").style.display = "block";

        obs.innerHTML = "Current State = <b>0 1 1</b> <br>Input = <b>1</b>"
    }

    if (i == 5) {
        document.getElementById("part5").style.display = "none";
        document.getElementById("part6").style.display = "block";

        obs.innerHTML = "Current State = <b>0 1 1</b> <br>Input = <b>0</b>"
    }

    if (i == 6) {
        document.getElementById("part6").style.display = "none";
        document.getElementById("part7").style.display = "block";

        obs.innerHTML = "Current State = <b>1 1 1</b> <br>Input = <b>0</b>"
    }

    if (i == 7) {
        document.getElementById("part7").style.display = "none";
        document.getElementById("part8").style.display = "block";
        document.getElementById("next").setAttribute('disabled', true);

        obs.innerHTML = "Syndrome computation has been successfully completed. <br> The computed syndrome is <b>101</b>."
    }
}

function res() {
    const obs = document.getElementById("observations");
    i = 0;
    document.getElementById("next").removeAttribute('disabled');

    document.getElementById("part1").style.display = "block";
    document.getElementById("part2").style.display = "none";
    document.getElementById("part3").style.display = "none";
    document.getElementById("part4").style.display = "none";
    document.getElementById("part5").style.display = "none";
    document.getElementById("part6").style.display = "none";
    document.getElementById("part7").style.display = "none";
    document.getElementById("part8").style.display = "none";

    obs.innerHTML = "Current State = <b>0 0 0</b> <br>Input = <b>0</b>";
}