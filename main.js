// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   });

//   win.loadFile('index.html');
// };

// app.whenReady().then(() => {
//   createWindow();

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });
const { app, Menu, BrowserWindow, dialog, ipcMain } = require('electron')

const isMac = process.platform === 'darwin'
const readline = require('readline')
const fs = require('fs')

// const template = [
//   // { role: 'appMenu' }
//   ...(isMac ? [{
//     label: app.name,
//     submenu: [
//       { role: 'about' },
//       { type: 'separator' },
//       { role: 'services' },
//       { type: 'separator' },
//       { role: 'hide' },
//       { role: 'hideOthers' },
//       { role: 'unhide' },
//       { type: 'separator' },
//       { role: 'quit' }
//     ]
//   }] : []),
//   // { role: 'fileMenu' }
//   {
//     label: '文件',
//     submenu: [
//       { 
//         label: '打开',
//         click: async () => {
//             console.log("clicked")
//             // const { dialog } = require('electron')
//             var filePath = (await dialog.showOpenDialog({ properties: ['openFile'] })).filePaths
//             var readFile = new Array
//             rl = readline.createInterface({
//               input: fs.createReadStream(filePath[0]),
//               output: process.stdout,
//               terminal: false
//             })
//             rl.on('line', (line) => {
//               console.log(line);
//               readFile.push(line)
//             });
//             rl.on('close', () => {
//               console.log(readFile);
//             });
          
//             // console.log(dialog.showOpenDialog({ properties: ['openFile'] }))
//             // const { shell } = require('electron')
//             // await shell.openExternal('https://electronjs.org')
//           }
//         },
//       {
//         label: '新建' 
//     }
//     ]
//   },
//   // { role: 'editMenu' }
//   {
//     label: '编辑',
//     submenu: [
//       { role: 'undo' },
//       { role: 'redo' },
//       { type: 'separator' },
//       { role: 'cut' },
//       { role: 'copy' },
//       { role: 'paste' },
//       ...(isMac ? [
//         { role: 'pasteAndMatchStyle' },
//         { role: 'delete' },
//         { role: 'selectAll' },
//         { type: 'separator' },
//         {
//           label: 'Speech',
//           submenu: [
//             { role: 'startSpeaking' },
//             { role: 'stopSpeaking' }
//           ]
//         }
//       ] : [
//         { role: 'delete' },
//         { type: 'separator' },
//         { role: 'selectAll' }
//       ])
//     ]
//   },
//   // { role: 'viewMenu' }
//   {
//     label: '词法分析',
//     submenu: [
//       { role: 'reload' },
//       { role: 'forceReload' },
//       { role: 'toggleDevTools' },
//       { type: 'separator' },
//       { role: 'resetZoom' },
//       { role: 'zoomIn' },
//       { role: 'zoomOut' },
//       { type: 'separator' },
//       { role: 'togglefullscreen' }
//     ]
//   },
//   // { role: 'windowMenu' }
//   {
//     label: '语法分析',
//     submenu: [
//       { role: 'minimize' },
//       { role: 'zoom' },
//       ...(isMac ? [
//         { type: 'separator' },
//         { role: 'front' },
//         { type: 'separator' },
//         { role: 'window' }
//       ] : [
//         { role: 'close' }
//       ])
//     ]
//   },
//   {
//     label: '中间代码',
//     submenu: [
//       {
//         label: 'Learn More',
//         click: async () => {
//           const { shell } = require('electron')
//           await shell.openExternal('https://electronjs.org')
//         }
//       }
//     ]
//   },
//   {
//     label: '目标代码生成',
//     submenu: [
//       {
//         label: 'Learn More',
//         click: async () => {
//           const { shell } = require('electron')
//           await shell.openExternal('https://electronjs.org')
//         }
//       }
//     ]
//   },
//   {
//     label: '查看',
//     submenu: [
//       {
//         label: 'Learn More',
//         click: async () => {
//           const { shell } = require('electron')
//           await shell.openExternal('https://electronjs.org')
//         }
//       }
//     ]
//   },
//   {
//     label: '帮助',
//     submenu: [
//       {
//         label: '帮助',
//         // click: async () => {
//         //   const { shell } = require('electron')
//         //   await shell.openExternal('https://electronjs.org')
//         // }
//       },
//       {
//         label: '关于',
//       }
//     ]
//   }
// ]


const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: '文件',
      submenu: [
        { 
          label: '打开',
          click: async () => {
            console.log("click")
            // win.webContents.send('open_the_file',"1111")
              console.log("clicked")
              // const { dialog } = require('electron')
              var filePath = (await dialog.showOpenDialog({ properties: ['openFile'] })).filePaths
              var readFile = new Array
              rl = readline.createInterface({
                input: fs.createReadStream(filePath[0]),
                output: process.stdout,
                terminal: false
              })
              rl.on('line', (line) => {
                console.log(line);
                readFile.push(line)
              });
              rl.on('close', () => {
                console.log(readFile);
                win.webContents.send('open_the_file',readFile)

              });
            
              // console.log(dialog.showOpenDialog({ properties: ['openFile'] }))
              // const { shell } = require('electron')
              // await shell.openExternal('https://electronjs.org')
            }
          },
        {
          label: '新建' 
      }
      ]
    },
    // { role: 'editMenu' }
    {
      label: '编辑',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac ? [
          { role: 'pasteAndMatchStyle' },
          { role: 'delete' },
          { role: 'selectAll' },
          { type: 'separator' },
          {
            label: 'Speech',
            submenu: [
              { role: 'startSpeaking' },
              { role: 'stopSpeaking' }
            ]
          }
        ] : [
          { role: 'delete' },
          { type: 'separator' },
          { role: 'selectAll' }
        ])
      ]
    },
    // { role: 'viewMenu' }
    {
      label: '词法分析',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: '语法分析',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      label: '中间代码',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    },
    {
      label: '目标代码生成',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    },
    {
      label: '查看',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '帮助',
          // click: async () => {
          //   const { shell } = require('electron')
          //   await shell.openExternal('https://electronjs.org')
          // }
        },
        {
          label: '关于',
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  // win.webContents.openDevTools({
  //   mode:'bottom'
  // });
  // win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});