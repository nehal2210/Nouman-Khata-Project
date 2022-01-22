// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    screen,
    ipcMain
} = require('electron')

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



ipcMain.on('getUser', (event, request) => {
    let names = {
        'nouman': {
            'age': '23',
            'father name': 'Ghulam Mustafa'
        }
    };

    event.sender.send('getUserReply', JSON.stringify(names[request]));
})




ipcMain.on('createAccount',async (event, request) => {
   

   
    request['cust_id'] = 1;
    const customer = new Customer(request);
    const customersaved = await customer.save();
    event.reply('createAccountReply',JSON.stringify(customersaved));
    console.log(request);

    event.sender.send('getUserReply', JSON.stringify(names[request]));
})


ipcMain.on("updateTransaction", async (e, args) => {
    console.log(args);

    const record  = await Customer.findOne({ 'name': 'noumn' }).exec();
    const id  = record._id;

    const newtransaction = {
        
            trans_id:1,
            entity:1,
            details:'string',
            weigth:1,
            rate:1,
            type:'string',
            person:'string',
            deal:1,
            total:1,
            kaat:1,
            kaat_cost:1,
            nets:1,
            net_balance:1
            
    }


    const updatedTask = await Customer.findOneAndUpdate(
        {_id: id},
        { $push: { 'transactions': newtransaction  } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });
    
    e.reply("update-task-success", JSON.stringify(updatedTask));
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
  