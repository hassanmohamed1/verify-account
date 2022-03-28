// const codes = document.querySelectorAll(".code")

// codes[0].focus()

// codes.forEach((code, idx) => {
//     code.addEventListener("keydown", (e) => {
//         if(e.key >= 0 && e.key <= 9) {
//             codes[idx].value = ""
//             setTimeout(() => codes[idx + 1].focus(), 10)
            
//         } else if(e.key === "Backspace") {
//             setTimeout(() => codes[idx - 1].focus(), 10)
//         }
//     })
// })

// const codes = document.querySelectorAll('.code');
 
// codes[0].focus();
 
// codes.forEach((code, idx) => {
//   code.addEventListener('keydown', (e) => {
//     if (e.key >= 0 && e.key <= 9) {
//       codes[idx].value = '';
//       setTimeout(() => focusInput(codes[idx + 1]), 10);
//     } else if (e.key === 'Backspace') {
//       setTimeout(() => focusInput(codes[idx - 1]), 10);
//     } else {
// // Prevent from typing (comma, dot, e)
//       e.preventDefault();
//     }
//   });
// });
 
// function focusInput(input) {
//   if (input) {
//     input.focus();
//   }
// }

const codes = document.querySelectorAll('.code');
 
codes[0].focus();
 
codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // Cleaning previous input value
    if (e.key >= 0 && e.key <= 9 && idx < codes.length) {
      codes[idx].value = '';
    }
 
    // Checking typed not numeric key (e.g. e, comma, dot)
    if (!(e.key === 'Backspace' || (e.key >= 0 && e.key <= 9))) {
      e.preventDefault();
    }
  });
 
  code.addEventListener('keyup', (e) => {
    // console.log(codes[idx].value);
    //  Clean input on Backspace and made focus on
    if (e.key === 'Backspace') {
      if (idx > 0 && !codes[idx].value) {
        codes[idx].value = '';
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
      return;
    }
    if (
      e.key >= 0 &&
      e.key <= 9 &&
      idx < codes.length - 1 &&
      codes[idx].value // we need to avoid focus of the next input if a current is empty
    ) {
      setTimeout(() => codes[idx + 1].focus(), 10);
      return;
    }
 
    // Remove focus from the current element if it's a last input
    if (idx === codes.length - 1 && codes[idx].value) {
      codes[idx].blur();
      return;
    }
  });
});