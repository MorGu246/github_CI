const express = require('express');

const port = 8080 ;//process.env.pory || 3671;
const app = express();

app.get("/", (req,res) => {
    res.send("welcome my site...")
})
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`The server is running on port${ port}....`);
});

/*app.listen(port, '0.0.0.0', () => {
    console.log(`The server is running on port ${port}....`);
});*/

// http://localhost:8080/ עובד
// http://89.168.101.54:8080/ לא עובד