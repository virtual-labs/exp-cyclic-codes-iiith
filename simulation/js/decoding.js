let i = 0;

function checkAnswer() {

    const input1 = document.getElementById("p1").value;
    const input2 = document.getElementById("p2").value;
    const input3 = document.getElementById("p3").value;
    const obs = document.getElementById("correctMessage");
    const form = document.getElementById("form1");

    const sr1 = document.getElementById("shift-reg-1");
    const sr2 = document.getElementById("shift-reg-2");
    const sr3 = document.getElementById("shift-reg-3");

    const buf1 = document.getElementById("buffer-bit-1");
    const buf2 = document.getElementById("buffer-bit-2");
    const buf3 = document.getElementById("buffer-bit-3");
    const buf4 = document.getElementById("buffer-bit-4");
    const buf5 = document.getElementById("buffer-bit-5");
    const buf6 = document.getElementById("buffer-bit-6");
    const buf7 = document.getElementById("buffer-bit-7");

    const tab11 = document.getElementById("t11");
    const tab12 = document.getElementById("t12");

    const tab21 = document.getElementById("t21");
    const tab22 = document.getElementById("t22");

    const tab31 = document.getElementById("t31");
    const tab32 = document.getElementById("t32");

    const tab41 = document.getElementById("t41");
    const tab42 = document.getElementById("t42");

    const tab51 = document.getElementById("t51");
    const tab52 = document.getElementById("t52");

    const tab61 = document.getElementById("t61");
    const tab62 = document.getElementById("t62");

    const tab71 = document.getElementById("t71");
    const tab72 = document.getElementById("t72");

    const stage = document.getElementById("stage");

    if (input1.length == 0 || input2.length == 0 || input3.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the bits.";
    }

    else if (input1.length > 1 || input2.length > 1 || input3.length > 1) {
        obs.style.color = "black";
        obs.innerHTML = "Enter values from the set {0, 1}.";
    }

    else if (input1 > 1 || input1 < 0 || input2 > 1 || input2 < 0 || input3 > 1 || input3 < 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter values from the set {0, 1}.";
    }

    else {

        if (i == 0) {
            if (input1 == 1 && input2 == 1 && input3 == 0) {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "1";
                buf3.innerHTML = "0";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "0";
                buf7.innerHTML = "1";

                tab11.innerHTML = "1";
                tab12.innerHTML = "1 1 0";

                stage.innerHTML = "Shift-1";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 1) {
            if (input1 == "0" && input2 == "1" && input3 == "1") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "1";
                buf3.innerHTML = "1";
                buf4.innerHTML = "0";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "0";

                tab21.innerHTML = "2";
                tab22.innerHTML = "0 1 1";

                stage.innerHTML = "Shift-2";


                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 2) {
            if (input1 == "1" && input2 == "1" && input3 == "1") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "1";
                buf3.innerHTML = "1";
                buf4.innerHTML = "1";
                buf5.innerHTML = "0";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab31.innerHTML = "3";
                tab32.innerHTML = "1 1 1";

                stage.innerHTML = "Shift-3";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 3) {
            if (input1 == "1" && input2 == "0" && input3 == "1") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "0";
                buf3.innerHTML = "1";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "0";
                buf7.innerHTML = "1";

                tab41.innerHTML = "4";
                tab42.innerHTML = "1 0 1";

                stage.innerHTML = "Shift-4";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 4) {
            if (input1 == "0" && input2 == "0" && input3 == "0") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "1";
                buf3.innerHTML = "0";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "0";

                tab51.innerHTML = "5";
                tab52.innerHTML = "0 0 0";

                stage.innerHTML = "Shift-5";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 5) {
            if (input1 == "0" && input2 == "0" && input3 == "0") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "0";
                buf3.innerHTML = "1";
                buf4.innerHTML = "0";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab61.innerHTML = "6";
                tab62.innerHTML = "0 0 0";

                stage.innerHTML = "Shift-6";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (i == 6) {
            if (input1 == "0" && input2 == "0" && input3 == "0") {
                i++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br>The codeword in the buffer register is the decoded codeword.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "0";
                buf3.innerHTML = "0";
                buf4.innerHTML = "1";
                buf5.innerHTML = "0";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab71.innerHTML = "7";
                tab72.innerHTML = "0 0 0";

                stage.innerHTML = "Shift-7";

                form.reset();

                document.getElementById("p1").style.display = "none";
                document.getElementById("p2").style.display = "none";
                document.getElementById("p3").style.display = "none";

                document.getElementById("submit-1").setAttribute("disabled", true);
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

    }
}


let j = 0;

function checkAnswer2() {

    const input1 = document.getElementById("ex2-p1").value;
    const input2 = document.getElementById("ex2-p2").value;
    const input3 = document.getElementById("ex2-p3").value;
    const obs = document.getElementById("ex2-correctMessage");
    const form = document.getElementById("form2");

    const sr1 = document.getElementById("ex2-shift-reg-1");
    const sr2 = document.getElementById("ex2-shift-reg-2");
    const sr3 = document.getElementById("ex2-shift-reg-3");

    const buf1 = document.getElementById("ex2-buffer-bit-1");
    const buf2 = document.getElementById("ex2-buffer-bit-2");
    const buf3 = document.getElementById("ex2-buffer-bit-3");
    const buf4 = document.getElementById("ex2-buffer-bit-4");
    const buf5 = document.getElementById("ex2-buffer-bit-5");
    const buf6 = document.getElementById("ex2-buffer-bit-6");
    const buf7 = document.getElementById("ex2-buffer-bit-7");

    const tab11 = document.getElementById("ex2-t11");
    const tab12 = document.getElementById("ex2-t12");

    const tab21 = document.getElementById("ex2-t21");
    const tab22 = document.getElementById("ex2-t22");

    const tab31 = document.getElementById("ex2-t31");
    const tab32 = document.getElementById("ex2-t32");

    const tab41 = document.getElementById("ex2-t41");
    const tab42 = document.getElementById("ex2-t42");

    const tab51 = document.getElementById("ex2-t51");
    const tab52 = document.getElementById("ex2-t52");

    const tab61 = document.getElementById("ex2-t61");
    const tab62 = document.getElementById("ex2-t62");

    const tab71 = document.getElementById("ex2-t71");
    const tab72 = document.getElementById("ex2-t72");

    const stage = document.getElementById("ex2-stage");

    if (input1.length == 0 || input2.length == 0 || input3.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the bits.";
    }

    else if (input1.length > 1 || input2.length > 1 || input3.length > 1) {
        obs.style.color = "black";
        obs.innerHTML = "Enter values from the set {0, 1}.";
    }

    else if (input1 > 1 || input1 < 0 || input2 > 1 || input2 < 0 || input3 > 1 || input3 < 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter values from the set {0, 1}.";
    }

    else {

        if (j == 0) {
            if (input1 == 0 && input2 == 0 && input3 == 1) {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "0";
                buf3.innerHTML = "1";
                buf4.innerHTML = "1";
                buf5.innerHTML = "0";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab11.innerHTML = "1";
                tab12.innerHTML = "0 0 1";

                stage.innerHTML = "Shift-1";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 1) {
            if (input1 == "1" && input2 == "1" && input3 == "0") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "1";
                buf3.innerHTML = "0";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "0";
                buf7.innerHTML = "1";

                tab21.innerHTML = "2";
                tab22.innerHTML = "1 1 0";

                stage.innerHTML = "Shift-2";


                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 2) {
            if (input1 == "0" && input2 == "1" && input3 == "1") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "1";
                buf3.innerHTML = "1";
                buf4.innerHTML = "0";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "0";

                tab31.innerHTML = "3";
                tab32.innerHTML = "0 1 1";

                stage.innerHTML = "Shift-3";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 3) {
            if (input1 == "1" && input2 == "1" && input3 == "1") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "1";
                buf3.innerHTML = "1";
                buf4.innerHTML = "1";
                buf5.innerHTML = "0";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab41.innerHTML = "4";
                tab42.innerHTML = "1 1 1";

                stage.innerHTML = "Shift-4";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 4) {
            if (input1 == "1" && input2 == "0" && input3 == "1") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "1";
                buf2.innerHTML = "0";
                buf3.innerHTML = "1";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "0";
                buf7.innerHTML = "1";

                tab51.innerHTML = "5";
                tab52.innerHTML = "1 0 1";

                stage.innerHTML = "Shift-5";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 5) {
            if (input1 == "0" && input2 == "0" && input3 == "0") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br> Now enter the syndrome after the next shift.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "1";
                buf3.innerHTML = "0";
                buf4.innerHTML = "1";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "0";

                tab61.innerHTML = "6";
                tab62.innerHTML = "0 0 0";

                stage.innerHTML = "Shift-6";

                form.reset();
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

        else if (j == 6) {
            if (input1 == "0" && input2 == "0" && input3 == "0") {
                j++;
                obs.style.color = "green";
                obs.innerHTML = "<b>Correct Answer!!!</b> <br>The codeword in the buffer register is the decoded codeword.";

                sr1.innerHTML = input1;
                sr2.innerHTML = input2;
                sr3.innerHTML = input3;

                buf1.innerHTML = "0";
                buf2.innerHTML = "0";
                buf3.innerHTML = "1";
                buf4.innerHTML = "0";
                buf5.innerHTML = "1";
                buf6.innerHTML = "1";
                buf7.innerHTML = "1";

                tab71.innerHTML = "7";
                tab72.innerHTML = "0 0 0";

                stage.innerHTML = "Shift-7";

                form.reset();

                document.getElementById("ex2-p1").style.display = "none";
                document.getElementById("ex2-p2").style.display = "none";
                document.getElementById("ex2-p3").style.display = "none";

                document.getElementById("submit-2").setAttribute("disabled", true);
            }

            else {
                if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                    obs.innerHTML = "<b>Wrong Again :(</b>";
                    obs.style.color = "red";
                }

                else {
                    obs.innerHTML = "<b>Wrong Answer :(</b>";
                    obs.style.color = "red";
                }
            }
        }

    }
}


function page1() {
    i = 0;

    document.getElementById("example-1").style.display="block";
    document.getElementById("example-2").style.display="none";

    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p3").style.display = "block";

    document.getElementById("correctMessage").innerHTML = "";
    document.getElementById("submit-1").removeAttribute("disabled");

    document.getElementById("shift-reg-1").innerHTML = "0";
    document.getElementById("shift-reg-2").innerHTML = "0";
    document.getElementById("shift-reg-3").innerHTML = "1";

    document.getElementById("buffer-bit-1").innerHTML = "1";
    document.getElementById("buffer-bit-2").innerHTML = "0";
    document.getElementById("buffer-bit-3").innerHTML = "1";
    document.getElementById("buffer-bit-4").innerHTML = "1";
    document.getElementById("buffer-bit-5").innerHTML = "0";
    document.getElementById("buffer-bit-6").innerHTML = "1";
    document.getElementById("buffer-bit-7").innerHTML = "1";

    document.getElementById("stage").innerHTML = "Initial Stage";
    for (var ii = 1; ii <= 7; ii++) {
        for (var jj = 1; jj <= 2; jj++) {
          var id = "t" + ii + jj;
          document.getElementById(id).innerHTML = "";
        }
      }
    document.getElementById("correctMessage").innerHTML = "";
}

function page2() {
    j = 0;

    document.getElementById("example-2").style.display="block";
    document.getElementById("example-1").style.display="none";

    document.getElementById("ex2-p1").style.display = "block";
    document.getElementById("ex2-p2").style.display = "block";
    document.getElementById("ex2-p3").style.display = "block";

    document.getElementById("ex2-correctMessage").innerHTML = "";
    document.getElementById("submit-2").removeAttribute("disabled");

    document.getElementById("ex2-shift-reg-1").innerHTML = "0";
    document.getElementById("ex2-shift-reg-2").innerHTML = "1";
    document.getElementById("ex2-shift-reg-3").innerHTML = "0";

    document.getElementById("ex2-buffer-bit-1").innerHTML = "0";
    document.getElementById("ex2-buffer-bit-2").innerHTML = "1";
    document.getElementById("ex2-buffer-bit-3").innerHTML = "1";
    document.getElementById("ex2-buffer-bit-4").innerHTML = "0";
    document.getElementById("ex2-buffer-bit-5").innerHTML = "1";
    document.getElementById("ex2-buffer-bit-6").innerHTML = "1";
    document.getElementById("ex2-buffer-bit-7").innerHTML = "1";

    document.getElementById("ex2-stage").innerHTML = "Initial Stage";
    for (var ii = 1; ii <= 7; ii++) {
        for (var jj = 1; jj <= 2; jj++) {
          var id = "ex2-t" + ii + jj;
          document.getElementById(id).innerHTML = "";
        }
      }
    document.getElementById("ex2-correctMessage").innerHTML = "";
}