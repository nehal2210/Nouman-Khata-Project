// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// const remote = require('electron').remote

const {
    ipcRenderer
} = require('electron');
const { escapeSelector } = require('jquery');


//global varible for reloading data(destory and create)
let customerTable;
let transactionsTable;



//set the dashboard and get data from server
function loadDashboard() {

    function setCustomerList(data) {

        console.log(data[0]._doc);
        customerTable = $('#main_table').DataTable({
            data: data,
            "paging": true,
            "ordering": true,
            "info": false,
            // sort: [false, false, true, false, false],
            columns: [{
                    data: '_doc.name',
                    render: function(data) {

                        return `<a style="cursor: pointer;" onclick= "showTransactions('${data}')">${data}</a>`;


                        // return data;
                    }

                },
                {
                    data: '_doc.details',
                    "defaultContent": ""
                },
                {
                    // used by world-flags-sprite library
                    data: 'bardana',
                    "defaultContent": "N/A"
                        // render: function(data, type) {
                        //     if (type === 'display') {
                        //         var country = '';

                    //         switch (data) {
                    //             case 'Argentina':
                    //                 country = 'ar';
                    //                 break;
                    //             case 'Edinburgh':
                    //                 country = '_Scotland';
                    //                 break;
                    //             case 'London':
                    //                 country = '_England';
                    //                 break;
                    //             case 'New York':
                    //             case 'San Francisco':
                    //                 country = 'us';
                    //                 break;
                    //             case 'Sydney':
                    //                 country = 'au';
                    //                 break;
                    //             case 'Tokyo':
                    //                 country = 'jp';
                    //                 break;
                    //         }

                    //         return '<span class="flag ' + country + '"></span> ' + data;
                    //     }

                    //     return data;
                    // }
                },
                // {
                //     data: 'extn',
                //     render: function(data, type, row, meta) {
                //         return type === 'display' ?
                //             '<progress value="' + data + '" max="9999"></progress>' :
                //             data;
                //     }
                // },
                // {
                //     data: "start_date"
                // },
                {
                    data: "_doc.balance",
                    "defaultContent": "N/A"
                }
            ]
        });

    };

    console.log("refresh called");


    ipcRenderer.invoke('getCustomerList').then((result) => {
        if (customerTable)
            customerTable.destroy();
        setCustomerList(result);
        console.log("destroyed recreated");
    });



}
$(function() {
    loadDashboard();
});



// $(function() {

//     var data1 = [{
//             'entity': 'Wheat',
//             'details': 'just to memorize something about this transactions',
//             'weight': '20.1',
//             'rate': '200',
//             'kaat': '2',
//             'type': '',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'taken',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3819',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },

//         {
//             'entity': 'Beaj',
//             'details': 'memo',
//             'weight': '5',
//             'rate': '1000',
//             'kaat': '',
//             'type': 'hybrid Wheat',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'given',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '5000',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },

//         {
//             'entity': 'Labour',
//             'details': 'memo',
//             'weight': '',
//             'rate': '300',
//             'kaat': '',
//             'type': 'Tractor',
//             'person': 'sajjad kalhoro',
//             'taken/given': '',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3000',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },
//         {
//             'entity': 'Beaj',
//             'details': 'memo',
//             'weight': '5',
//             'rate': '1000',
//             'kaat': '',
//             'type': 'hybrid Wheat',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'given',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '5000',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         }, {
//             'entity': 'Till',
//             'details': 'memo',
//             'weight': '20.1',
//             'rate': '200',
//             'kaat': '2',
//             'type': '',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'taken',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3819',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },
//         {
//             'entity': 'Wheat',
//             'details': 'just to memorize something about this transactions',
//             'weight': '20.1',
//             'rate': '200',
//             'kaat': '2',
//             'type': '',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'taken',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3819',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },

//         {
//             'entity': 'Money',
//             'details': 'memo',
//             'weight': '',
//             'rate': '',
//             'kaat': '',
//             'type': '',
//             'person': 'sajjad kalhoro',
//             'taken/given': 'taken',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3819',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },
//         {
//             'entity': 'Labour',
//             'details': 'memo',
//             'weight': '',
//             'rate': '300',
//             'kaat': '',
//             'type': '',
//             'person': 'sajjad kalhoro',
//             'taken/given': '',
//             'NET': '30000',
//             'date': '1/6/2021',
//             'total': '3000',
//             'Net Balance': '2000',
//             'kaat Cost': '1000'

//         },

//     ];

//     $('#data_table').DataTable({
//         data: data1,
//         "paging": true,
//         "ordering": false,
//         "info": false,
//         columns: [{
//                 data: 'entity',
//                 render: function(data, type) {

//                     return `<a style="cursor: pointer;" onclick= "printname('${data}')">${data}</a>`;


//                     // return data;
//                 }

//             },
//             {
//                 data: 'details'
//             },
//             {
//                 data: 'weight'
//             },
//             {
//                 data: 'rate'
//             },
//             {
//                 data: 'type'
//             },
//             {
//                 data: 'person'
//             },
//             {
//                 data: 'taken/given'
//             },
//             {
//                 data: 'total'
//             },
//             {
//                 data: 'kaat'
//             },

//             {
//                 data: 'NET'
//             },

//             {
//                 data: 'date'
//             },
//             {
//                 data: 'kaat Cost'
//             },
//             {
//                 data: 'Net Balance'
//             },

//         ]
//     });

// })


// Transactions Table

function loadTransactions(name) {


    console.log("load Transactions called");

    function setTransactionsList(transactions) {

        if (transactionsTable) transactionsTable.destroy();
        else {

            transactionsTable = $('#data_table').DataTable({
                data: transactions,
                "paging": true,
                "ordering": false,
                "info": false,
                columns: [{
                        data: 'entity',
                        render: function(data, type) {

                            return `<a style="cursor: pointer;" onclick= "printname('${data}')">${data}</a>`;


                            // return data;
                        }

                    },
                    {
                        data: 'details'
                    },
                    {
                        data: 'weight'
                    },
                    {
                        data: 'rate'
                    },
                    {
                        data: 'type'
                    },
                    {
                        data: 'person'
                    },
                    {
                        data: 'taken/given'
                    },
                    {
                        data: 'total'
                    },
                    {
                        data: 'kaat'
                    },

                    {
                        data: 'NET'
                    },

                    {
                        data: 'date'
                    },
                    {
                        data: 'kaat Cost'
                    },
                    {
                        data: 'Net Balance'
                    },

                ]
            });
        }

    }

    ipcRenderer.invoke('getTransactions', name).then((result) => {
        var abs = JSON.parse(result);
        console.log("result from renderes", result);

        setTransactionsList(result.transactions);


    });

}



const form = document.querySelector("#createAccountForm");
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    // console.log(form.name.value)
    let bal = 0;
    if (form.balance.value == '') form.balance.value = 0;
    if (form.opening_bal.value == '') form.opening_bal.value = 0;

    bal = form.balance.value - form.opening_bal.value;

    const task = {
        'name': form.name.value,
        'details': form.details.value,
        'balance': bal,
    };

    if (task.details != "") {
        task.details += " " + "Cnct:" + form.contact_number.value;
    }



    ipcRenderer.send("createAccount", task);


    form.reset();
});

// Send Crud in to main Process

// const { ipcRenderer } = require("electron");

// const taskForm = document.querySelector("#taskForm");
// const taskName = document.querySelector("#taskName");
// const taskDescription = document.querySelector("#taskDescription");


// taskForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const task = {
//       name: taskName.value,
//       description: taskDescription.value,
//     };


//       ipcRenderer.send("new-task", task);


//     taskForm.reset();
//   });



// ***************************** old data tables entry and functions******************************************



// // this is for the client dashbaord/list
// $(function() {
//     var data2 = [{
//             "name": "Timothy Mooney",
//             "position": "Office Manager",
//             "salary": "136200",
//             //start_date": "2008/11/13",
//             "office": "London",
//             "extn": "7580"
//         },
//         
//         {
//             "name": "Donna Snider",
//             "position": "Customer Support",
//             "salary": "136200",
//             //start_date": "2008/11/13",
//             "office": "New York",
//             "extn": "4226"
//         }
//     ];
//     // $('#main_table').DataTable({
//     //     data: data2,
//     //     "paging": true,
//     //     "ordering": true,
//     //     "info": false,
//     //     // sort: [false, false, true, false, false],
//     //     columns: [{
//     //             data: 'name',
//     //             render: function(data, type) {

//     //                 return `<a style="cursor: pointer;" onclick= "printname('${data}')">${data}</a>`;


//     //                 // return data;
//     //             }

//     //         },
//     //         {
//     //             data: 'office'
//     //         },
//     //         {
//     //             className: 'f32', // used by world-flags-sprite library
//     //             data: 'extn',
//     //             render: function(data, type) {
//     //                 if (type === 'display') {
//     //                     var country = '';

//     //                     switch (data) {
//     //                         case 'Argentina':
//     //                             country = 'ar';
//     //                             break;
//     //                         case 'Edinburgh':
//     //                             country = '_Scotland';
//     //                             break;
//     //                         case 'London':
//     //                             country = '_England';
//     //                             break;
//     //                         case 'New York':
//     //                         case 'San Francisco':
//     //                             country = 'us';
//     //                             break;
//     //                         case 'Sydney':
//     //                             country = 'au';
//     //                             break;
//     //                         case 'Tokyo':
//     //                             country = 'jp';
//     //                             break;
//     //                     }

//     //                     return '<span class="flag ' + country + '"></span> ' + data;
//     //                 }

//     //                 return data;
//     //             }
//     //         },
//     //         // {
//     //         //     data: 'extn',
//     //         //     render: function(data, type, row, meta) {
//     //         //         return type === 'display' ?
//     //         //             '<progress value="' + data + '" max="9999"></progress>' :
//     //         //             data;
//     //         //     }
//     //         // },
//     //         // {
//     //         //     data: "start_date"
//     //         // },
//     //         {
//     //             data: "salary",
//     //             render: $.fn.dataTable.render.number(',', '.', 0, 'Rs.')
//     //         }
//     //     ]
//     // });

// });



// $(function() {
//     console.log('ready');

//     $('#btn').on('click', () => {
//         console.log('btn click');
//         ipcRenderer.send('getUser', 'nouman')
//     })


//     ipcRenderer.on('getUserReply', (event, response) => {
//         let data = JSON.parse(response);

//         console.log(data);
//         // const message = `Asynchronous message reply: ${arg}`
//         // document.getElementById('async-reply').innerHTML = message
//     })

// })


// Wheat
//Till
//Urea
//Sarso
//DAP
//Pesticide
//Beaj
//Diesel
//Machine
//Money (Cash)
//Check
//Labour
//Other

// $(function(){
//     $('.hide').hide();
// })

// function selector(element){

//     $('.selectorOptions .hide').hide();
//     let v = element.value;
//     // console.log(element.value);

//     if(e=='Wheat'||e=='Till'||e=='Urea'||e=='Sarso'||e=='DAP'){
//         $('#type1').show();
//     }
//     else if(v=='Beaj'|| v=='Diesel'||v=='Machine'){
//         $('#type2').show();

//     }
//     else if(v=='Money (Cash)'|| v=='Check'){
//         $('#type4').show();

//     }
//     else if(v=='Labour'){
//         $('#type5').show();
//     }
//     else if(v=='Other'){
//         $('#type6').show();
//     }
// }