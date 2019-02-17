var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipcMain = require('electron').ipcMain;

global.sharedObj = {prop1: null};

ipcMain.on('show-prop1', function(event) {
  console.log(global.sharedObj.prop1);
});

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function(){
  mainWindow = new BrowserWindow({width: 800, height: 600,});  
  mainWindow.setMenu(null);     
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {mainWindow = null;});
});