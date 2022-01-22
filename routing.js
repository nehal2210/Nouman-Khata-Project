// $(function() {
//     $('#dashboard').show();
//     $('#create_account').hide();
//     $('#edit_account').hide();
//     $('#user_detail').hide();
// })


$(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#edit_account").offset().top
    }, 1000);

    // $("#edit_account").offset().top - 100
})

function scroll(e) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#" + e).offset().top
    }, 1000);
}



function route(element) {
    switch (element) {
        case 'dashboard':
            scroll(element);
            // $(`#${path}`).show();

            break;

        case 'create_account':
            scroll(element);
            // $(`#${path}`).show();

            break;

        case '':
            scroll(element);
            // $(`#${path}`).show();

            break;



        default:
            break;
    }
}
function route2(path) {

    //implement the back button
    $('#dashboard').hide();
    $('#create_account').hide();
    $('#edit_account').hide();
    $('#user_detail').hide();


    switch (path) {
        case 'dashboard':
            $(`#${path}`).show();

            break;

        case 'create_account':
            $(`#${path}`).show();

            break;

        default:
            break;
    }

}