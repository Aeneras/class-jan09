// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;

                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);


// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  // Desprendiendo de usar una variable y apuntamos directo al await ///
  // await obtainInstruction("broccoli", 0);
  // document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
  // ----------------
  // paso 1
  const step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  // paso 2
  const step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  // paso 3
  const step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  // paso 4
  const step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  // paso 4
  const step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  // paso 5
  const step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  // paso 6
  const step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  // Añadir texto despues del ultimo paso de el broccoli
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  // Remove hidden attribute de la imagen del broccoli
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1 = obtainInstruction("brusselsSprouts", 1);
const paso2 = obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts", 3);
const paso4 = obtainInstruction("brusselsSprouts", 4);
const paso5 = obtainInstruction("brusselsSprouts", 5);
const paso6 = obtainInstruction("brusselsSprouts", 6);
const paso7 = obtainInstruction("brusselsSprouts", 7);