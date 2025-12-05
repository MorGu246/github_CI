const express = require('express');

const port = 8080 ;//process.env.pory || 3671;
const app = express();

app.get("/", (req,res) => {
    res.send("welcome my site ")
})
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`The server is running on port${ port}....`);
});