      function calculate() {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);
        const operator = document.getElementById("operator").value;
        let result;

        if (operator === "+") {
          result = num1 + num2;
        } else if (operator === "-") {
          result = num1 - num2;
        }
        document.getElementById("result").textContent = result;
        
      }
      console.log(document.getElementById("result").textContent = result);
  