There are two parts in this experiment
<br>

1. Demo
2. Simulation

The task in Demo is self explanatory. There are three tasks in Simulation.
<br>
<br>

**Procedure for Encoding:**

1. First enter a binary message and click on <b>Submit</b>.
2. The entered message will be displayed in <b>Observations</b>.
3. Encode the message using the (7, 4) Cyclic Code with the generator polynomial <b>g(x)=1+x+x<sup>3</sup></b> and click on <b>Submit</b>.
4. The correctness of the entered answer is displayed in <b>Observations</b>.
5. If the answer is correct, click on <b>Reset</b> to try these steps again with a different binary message.
6. <b>Reset</b> also clears all input fields and empties the Observations table.

---

**Procedure for Shift Register Encoding:**

1. The initial contents of the shift register are obtained from the Syndrome Computation circuit. Complete the Syndrome Computation Demo before attempting this task. The contents can be seen in the Simulation area as well as in the table in <b>Observations</b>.
2. Enter the next state values in all the fields provided and click on <b>Submit</b>.
3. The correctness of the entered answer is displayed in <b>Observations</b>.
4. If the entered answer is correct, the contents of the shift registers will be updated in the Simulation area and the next input message bit will be also displayed. This can also be seen in the table in <b>Observations</b>.
5. Repeat this procedure.
6. After four shifts, a message prompting the entry of the codeword will be displayed in <b>Observations</b>.
7. Enter the codeword and click on <b>Submit</b>.
8. The correctness of the entered answer is displayed in <b>Observations</b>.
9. <b>Next</b> - Displays the next example. Solve sufficient number of examples.
10. <b>Reset</b> clears all input fields and empties the Observations table and register contents.

---

**Procedure for Decoding:**

1. Initially, the shift register contents are 0 0 1. This is obtained from the Syndrome Computation circuit. The contents can be seen in the Simulation area as well as in the table in <b>Observations</b>.
2. Enter the next state values in all the fields provided and click on <b>Submit</b>.
3. The correctness of the entered answer is displayed in <b>Observations</b>.
4. If the entered answer is correct, the contents of the shift registers will be updated in the Simulation area. This can also be seen in the table in <b>Observations</b>. The contents of the buffer register will also get updated in the Simulation area.
5. Repeat this procedure.
6. After seven shifts, the buffer register contains the decoded codeword.
7. <b>Reset</b> clears all input fields, empties the Observations table, and restores the registers to their initial state.

---
