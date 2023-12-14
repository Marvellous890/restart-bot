var express = require('express');
var app = express();

const { exec } = require('child_process');


app.get('/restart', function (req, res) {
  // Replace 'YOUR_COMMAND_HERE' with the actual command you want to run
  const command = 'pm2 restart codeybot';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the command: ${error}`);
      return;
    }

    // console.log(`Command output: ${stdout}`);
    // console.error(`Command errors: ${stderr}`);
  });

  res.send('<h1>Bot restarted successfully</h1>')
})

const port = 8000

var server = app.listen(port, function () {
   console.log("app listening at port " + port)
})
