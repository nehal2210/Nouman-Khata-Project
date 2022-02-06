// cust_id: {
//     type: Number,
//         required: true,
//             unique: true,

// },
// name: {
//     type: String,
//         required: true,
// },
// details: {
//     type: String,
// },
// bardana: { type: Number },
// balance: { type: Number },
// transactions:


// const form = document.querySelector("#createAccountForm");


// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     // console.log(form.name.value)
//     let bal = 0;
//     if (form.balance.value == '') form.balance.value = 0;
//     if (form.opening_bal.value == '') form.opening_bal.value = 0;

//     bal = form.balance.value - form.opening_bal.value;

//     const task = {
//         'name': form.name.value,
//         'details': form.details.value + " " + "Contact No: " + form.contact_number.value,
//         'balance': bal,
//     };

//     ipcRenderer.send("createAccount", task);


//     form.reset();
// });