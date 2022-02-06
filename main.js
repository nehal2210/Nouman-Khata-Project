// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    screen,
    ipcMain,
    ipcRenderer
} = require('electron');
const { lstat } = require('fs');

const path = require('path')
const Customer = require("./models/Customer");

require("./database");

function createWindow() {
    const {
        width,
        height
    } = screen.getPrimaryDisplay().workAreaSize
        // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true, // is default value after Electron v5
            contextIsolation: false, // protect against prototype pollution
            enableRemoteModule: true, // turn off remote
            // preload: path.join(__dirname, "preload.js") 
        }
    })

    // and load the index.html of the app.

    mainWindow.loadFile(`./views/index.html`)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the

        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipcMain.handle('getCustomerList', async(event, someArgument) => {
    // const result = await

    var data = [{
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

    var list = await Customer.find({}, { "transactions": 0, "__v": 0 });
    console.log(list[0]._id);


    return list;
});


//get specific user's transaction list
ipcMain.handle('getTransactions', async(event, name) => {

    console.log("handler called");
    // let result1 = await Customer.find({ "name": name }, { "transactions": 1, "_id": 0 })

    var list = await Customer.find({ "name": "nouman" }, { "transactions": 1, "_id": 0 });
    console.log("test results", list);

    // list[0].transactions[0] = 1
    return (JSON.stringify(list));

});


// create Account
ipcMain.on('createAccount', async(event, request) => {

    request['cust_id'] = 1;
    const customer = new Customer(request);
    const customersaved = await customer.save();
    event.reply('createAccountReply', JSON.stringify(customersaved));
    console.log(request);

    // event.sender.send('getUserReply', JSON.stringify(names[request]));
})

// Insert Transactions 
ipcMain.on("createAccount1", async(e, args) => {
    // console.log(args);


    const newtransaction = {

        trans_id: 1,
        entity: 1,
        details: 'string',
        weigth: 1,
        rate: 1,
        type: 'string',
        person: 'string',
        deal: 1,
        total: 1,
        kaat: 1,
        kaat_cost: 1,
        nets: 1,
        net_balance: 1

    }


    const updatedTask = await Customer.findOneAndUpdate({ "name": "nouman" }, { $push: { 'transactions': newtransaction } },
        function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });

    e.reply("update-task-success", JSON.stringify(updatedTask));
});


// remove Transactions 
ipcMain.on("createAccount1", async(e, args) => {
    // console.log(args);

    // const record = await Customer.findOne({ 'name': 'nouman' }).exec();
    // const id = record.id;

    const newtransaction = {

        trans_id: 1,
        entity: 1,
        details: 'string',
        weigth: 1,
        rate: 1,
        type: 'string',
        person: 'string',
        deal: 1,
        total: 1,
        kaat: 1,
        kaat_cost: 1,
        nets: 1,
        net_balance: 1

    }


    const updatedTask = await Customer.findOneAndUpdate({ "name": "nouman" }, { $pull: { 'transactions': { "trans_id": 1 } } },
        function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });

    // e.reply("update-task-success", JSON.stringify(updatedTask));
});




// update Transactions 
ipcMain.on("createAccount1", async(e, args) => {
    console.log("called");



    const newtransaction = {

        trans_id: 1,
        entity: 231,
        details: 'string',
        weigth: 231,
        rate: 231,
        type: 'string',
        person: 'string',
        deal: 231,
        total: 231,
        kaat: 23,
        kaat_cost: 23,
        nets: 23,
        net_balance: 23

    }

    const updatedTask = await Customer.findOneAndUpdate({ 'name': "nouman", 'transactions.trans_id': 1 }, {
        $set: { 'transactions.$': newtransaction }
    })



    console.log(updatedTask);
    // e.reply("update-task-success", JSON.stringify(updatedTask));
});

// crud Queery example

// ipcMain.on("new-task", async (e, arg) => {
//     const newTask = new Task(arg);
//     const taskSaved = await newTask.save();
//     e.reply("new-task-created", JSON.stringify(taskSaved));
//   });

//   ipcMain.on("get-tasks", async (e, arg) => {
//     const tasks = await Task.find();
//     e.reply("get-tasks", JSON.stringify(tasks));
//   });

//   ipcMain.on("delete-task", async (e, args) => {
//     const taskDeleted = await Task.findByIdAndDelete(args);
//     e.reply("delete-task-success", JSON.stringify(taskDeleted));
//   });