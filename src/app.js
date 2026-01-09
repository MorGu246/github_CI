const express = require('express');
const path = require('path'); ///////////////

const port = 80 ;//process.env.pory || 3671; //3002
const app = express();

/*app.get("/", (req,res) => {
    res.send("welcome my site...")
})*/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../my_page.html'));
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`The server is running on port ${port}....`);
});

/*app.listen(port, '89.168.101.54', () => { //0.0.0.0
    console.log(`The server is running on port ${port}....`);
})*/

// http://localhost:3002/ עובד //8080 //3002
// http://89.168.101.54:3002/ לא עובד //8080 //3002
// http://89.168.101.54:80/