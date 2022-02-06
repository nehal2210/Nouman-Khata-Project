// $(function() {
//     $('#dashboard').show();
//     $('#create_account').hide();
//     $('#edit_account').hide();
//     $('#user_detail').hide();
// })

function hideAll() {
    $("#dashboard, #add_transaction, #create_account, #account_transactions").hide();

}

function showTransactions(e) {

    console.log(e)

    // hiding all others
    hideAll();

    //change the name to client name 
    $("#account_transactions .card-title").text(e);

    // show only single window
    $("#account_transactions").show();

    console.log("s t called")
}

function showDashboard() {

    hideAll();

    $("#dashboard").show();
    loadDashboard();
}

function showAddTransaction(e) {

    let name = $("#account_transactions .UserName").text();
    console.log("showAddTransaction called");

    loadTransactions(name);
    console.log("name = ", name)

}

// $(function () {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#edit_account").offset().top
//     }, 1000);

//     // $("#edit_account").offset().top - 100
// })

// function scroll(e) {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#" + e).offset().top
//     }, 1000);
// }



// function route(element) {
//     switch (element) {
//         case 'dashboard':
//             scroll(element);
//             // $(`#${path}`).show();

//             break;

//         case 'create_account':
//             scroll(element);
//             // $(`#${path}`).show();

//             break;

//         case '':
//             scroll(element);
//             // $(`#${path}`).show();

//             break;



//         default:
//             break;
//     }
// }
// function route2(path) {

//     //implement the back button
//     $('#dashboard').hide();
//     $('#create_account').hide();
//     $('#edit_account').hide();
//     $('#user_detail').hide();


//     switch (path) {
//         case 'dashboard':
//             $(`#${path}`).show();

//             break;

//         case 'create_account':
//             $(`#${path}`).show();

//             break;

//         default:
//             break;
//     }

// }