//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {

        if(e.target.value.length > 1){
            e.target.value = e.target.value.slice(0,1);
        }

        if(e.target.value !== ""){
            codes[index + 1]?.focus();
        }

    });

    code.addEventListener("keydown", (e) => {

        if(e.key === "Backspace" && code.value === ""){
            codes[index - 1]?.focus();
        }

    });

});