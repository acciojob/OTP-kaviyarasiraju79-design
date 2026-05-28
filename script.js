//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener('input', (e) => {
    const value = e.target.value;

    // allow only single digit
    e.target.value = value.replace(/[^0-9]/g, '').slice(0, 1);

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {

    if (e.key === 'Backspace') {

      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
        e.preventDefault();
      }
    }
  });

});