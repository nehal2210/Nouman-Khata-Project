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

// let $ = require('jquery');

$(function() {
    console.log('ready');

    $('#btn').on('click', () => {
        console.log('btn click');
        ipcRenderer.send('getUser', 'nouman')
    })


    ipcRenderer.on('getUserReply', (event, response) => {
        let data = JSON.parse(response);

        console.log(data);
        // const message = `Asynchronous message reply: ${arg}`
        // document.getElementById('async-reply').innerHTML = message
    })

})

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

// Transactions Table
$(function() {

    var data1 = [{
            'entity': 'Wheat',
            'details': 'just to memorize something about this transactions',
            'weight': '20.1',
            'rate': '200',
            'kaat': '2',
            'type': '',
            'person': 'sajjad kalhoro',
            'taken/given': 'taken',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3819',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },

        {
            'entity': 'Beaj',
            'details': 'memo',
            'weight': '5',
            'rate': '1000',
            'kaat': '',
            'type': 'hybrid Wheat',
            'person': 'sajjad kalhoro',
            'taken/given': 'given',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '5000',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },

        {
            'entity': 'Labour',
            'details': 'memo',
            'weight': '',
            'rate': '300',
            'kaat': '',
            'type': 'Tractor',
            'person': 'sajjad kalhoro',
            'taken/given': '',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3000',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },
        {
            'entity': 'Beaj',
            'details': 'memo',
            'weight': '5',
            'rate': '1000',
            'kaat': '',
            'type': 'hybrid Wheat',
            'person': 'sajjad kalhoro',
            'taken/given': 'given',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '5000',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        }, {
            'entity': 'Till',
            'details': 'memo',
            'weight': '20.1',
            'rate': '200',
            'kaat': '2',
            'type': '',
            'person': 'sajjad kalhoro',
            'taken/given': 'taken',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3819',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },
        {
            'entity': 'Wheat',
            'details': 'just to memorize something about this transactions',
            'weight': '20.1',
            'rate': '200',
            'kaat': '2',
            'type': '',
            'person': 'sajjad kalhoro',
            'taken/given': 'taken',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3819',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },

        {
            'entity': 'Money',
            'details': 'memo',
            'weight': '',
            'rate': '',
            'kaat': '',
            'type': '',
            'person': 'sajjad kalhoro',
            'taken/given': 'taken',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3819',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },
        {
            'entity': 'Labour',
            'details': 'memo',
            'weight': '',
            'rate': '300',
            'kaat': '',
            'type': '',
            'person': 'sajjad kalhoro',
            'taken/given': '',
            'NET': '30000',
            'date': '1/6/2021',
            'total': '3000',
            'Net Balance': '2000',
            'kaat Cost': '1000'

        },

    ];

    $('#data_table').DataTable({
        data: data1,
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

})

// this is for the client dashbaord/list
$(function() {
    var data2 = [{
            "name": "Timothy Mooney",
            "position": "Office Manager",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "London",
            "extn": "7580"
        },
        {
            "name": "Jackson Bradshaw",
            "position": "Director",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "New York",
            "extn": "1042"
        },
        {
            "name": "Olivia Liang",
            "position": "Support Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Argentina",
            "extn": "2120"
        },
        {
            "name": "Bruno Nash",
            "position": "Software Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "London",
            "extn": "6222"
        },
        {
            "name": "Sakura Yamamoto",
            "position": "Support Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Tokyo",
            "extn": "9383"
        },
        {
            "name": "Thor Walton",
            "position": "Developer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "New York",
            "extn": "8327"
        },
        {
            "name": "Finn Camacho",
            "position": "Support Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "San Francisco",
            "extn": "2927"
        },
        {
            "name": "Serge Baldwin",
            "position": "Data Coordinator",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Argentina",
            "extn": "8352"
        },
        {
            "name": "Zenaida Frank",
            "position": "Software Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "New York",
            "extn": "7439"
        },
        {
            "name": "Zorita Serrano",
            "position": "Software Engineer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "San Francisco",
            "extn": "4389"
        },
        {
            "name": "Jennifer Acosta",
            "position": "Junior Javascript Developer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Edinburgh",
            "extn": "3431"
        },
        {
            "name": "Cara Stevens",
            "position": "Sales Assistant",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "New York",
            "extn": "3990"
        },
        {
            "name": "Hermione Butler",
            "position": "Regional Director",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "London",
            "extn": "1016"
        },
        {
            "name": "Lael Greer",
            "position": "Systems Administrator",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "London",
            "extn": "6733"
        },
        {
            "name": "Jonas Alexander",
            "position": "Developer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "San Francisco",
            "extn": "8196"
        },
        {
            "name": "Shad Decker",
            "position": "Regional Director",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Edinburgh",
            "extn": "6373"
        },
        {
            "name": "Michael Bruce",
            "position": "Javascript Developer",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "Argentina",
            "extn": "5384"
        },
        {
            "name": "Donna Snider",
            "position": "Customer Support",
            "salary": "136200",
            //start_date": "2008/11/13",
            "office": "New York",
            "extn": "4226"
        }
    ];
    $('#main_table').DataTable({
        data: data2,
        "paging": true,
        "ordering": true,
        "info": false,
        // sort: [false, false, true, false, false],
        columns: [{
                data: 'name',
                data2: 'extn',
                render: function(data, type) {

                    return `<a style="cursor: pointer;" onclick= "printname('${data}')">${data}</a>`;


                    // return data;
                }

            },
            {
                data: 'office'
            },
            {
                className: 'f32', // used by world-flags-sprite library
                data: 'extn',
                render: function(data, type) {
                    if (type === 'display') {
                        var country = '';

                        switch (data) {
                            case 'Argentina':
                                country = 'ar';
                                break;
                            case 'Edinburgh':
                                country = '_Scotland';
                                break;
                            case 'London':
                                country = '_England';
                                break;
                            case 'New York':
                            case 'San Francisco':
                                country = 'us';
                                break;
                            case 'Sydney':
                                country = 'au';
                                break;
                            case 'Tokyo':
                                country = 'jp';
                                break;
                        }

                        return '<span class="flag ' + country + '"></span> ' + data;
                    }

                    return data;
                }
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
                data: "salary",
                render: $.fn.dataTable.render.number(',', '.', 0, 'Rs.')
            }
        ]
    });
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