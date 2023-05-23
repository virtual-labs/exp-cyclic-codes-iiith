var inpArray = "";
var expectedOut = "";

function display() {
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;
    const m3 = document.getElementById("m3").value;
    const m4 = document.getElementById("m4").value;
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const mEntered = document.getElementById("mEntered");


    if (m1.length == 0 || m2.length == 0 || m3.length == 0 || m4.length == 0) {

        mEntered.innerHTML = "Enter all the bits.";
        return;

    }

    else if (m1.length > 1 || m2.length > 1 || m3.length > 1 || m4.length > 1) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if (m1 > 1 || m1 < 0 || m2 > 1 || m2 < 0 || m3 > 1 || m3 < 0
        || m4 > 1 || m4 < 0) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else {

        mEntered.innerHTML = "The entered message is <br><b>["
            + m1 + " " + m2 + " " + m3 + " " + m4 + "]</b>.";

        inpArray = m1 + m2 + m3 + m4;

        part1.style.display = "none";
        part2.style.display = "block";
        return;
    }
}

function check() {
    const b1 = document.getElementById("b1").value;
    const b2 = document.getElementById("b2").value;
    const b3 = document.getElementById("b3").value;
    const b4 = document.getElementById("b4").value;
    const b5 = document.getElementById("b5").value;
    const b6 = document.getElementById("b6").value;
    const b7 = document.getElementById("b7").value;

    const cEntered = document.getElementById("cEntered");

    if (inpArray == "0000") {
        expectedOut = "000" + inpArray;
    }

    else if (inpArray == "0001") {
        expectedOut = "101" + inpArray;
    }

    else if (inpArray == "0010") {
        expectedOut = "111" + inpArray;
    }

    else if (inpArray == "0011") {
        expectedOut = "010" + inpArray;
    }

    else if (inpArray == "0100") {
        expectedOut = "011" + inpArray;
    }

    else if (inpArray == "0101") {
        expectedOut = "110" + inpArray;
    }

    else if (inpArray == "0110") {
        expectedOut = "100" + inpArray;
    }

    else if (inpArray == "0111") {
        expectedOut = "001" + inpArray;
    }

    else if (inpArray == "1000") {
        expectedOut = "110" + inpArray;
    }

    else if (inpArray == "1001") {
        expectedOut = "011" + inpArray;
    }

    else if (inpArray == "1010") {
        expectedOut = "001" + inpArray;
    }

    else if (inpArray == "1011") {
        expectedOut = "100" + inpArray;
    }

    else if (inpArray == "1100") {
        expectedOut = "101" + inpArray;
    }

    else if (inpArray == "1101") {
        expectedOut = "000" + inpArray;
    }

    else if (inpArray == "1110") {
        expectedOut = "010" + inpArray;
    }

    else if (inpArray == "1111") {
        expectedOut = "111" + inpArray;
    }



    if (b1.length == 0 || b2.length == 0 || b3.length == 0 || b4.length == 0
        || b5.length == 0 || b6.length == 0 || b7.length == 0) {

        cEntered.innerHTML = "Enter all the bits.";
        cEntered.style.color = "black";
        return;
    }

    else if (b1.length > 1 || b2.length > 1 || b3.length > 1 || b4.length > 1
        || b5.length > 1 || b6.length > 1 || b7.length > 1) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;

    }

    else if (b1 > 1 || b1 < 0 || b2 > 1 || b2 < 0 || b3 > 1 || b3 < 0 || b4 > 1 || b4 < 0
        || b5 > 1 || b5 < 0 || b6 > 1 || b6 < 0 || b7 > 1 || b7 < 0) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;
    }

    else if (expectedOut == b1 + b2 + b3 + b4 + b5 + b6 + b7) {

        cEntered.innerHTML = "<b>Correct Answer!!!</b>";
        cEntered.style.color = "green";
        return;
    }

    else {
        if (cEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            cEntered.innerHTML = "<b>Wrong Again :(</b>";
            cEntered.style.color = "red";
            return;
        }

        else {
            cEntered.innerHTML = "<b>Wrong Answer :(</b>";
            cEntered.style.color = "red";
            return;
        }
    }
}



function initial() {
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const mEntered = document.getElementById("mEntered");
    const cEntered = document.getElementById("cEntered");

    mEntered.innerHTML = "";
    cEntered.innerHTML = "";

    part1.style.display = "block";
    part2.style.display = "none";
    form1.reset();
    form2.reset();

}