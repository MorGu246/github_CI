const express = require('express');
const path = require('path'); ///////////////

const port = 3002 ;//process.env.pory || 3671; //3002
const app = express();

/*app.get("/", (req,res) => {
    res.send("welcome my site...")
})*/

//app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.use(express.static(path.join(__dirname, '../')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
//     console.log(`The server is running on port ${port}....`);
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// הגדרת נתיב אבסולוטי (מוחלט) לתיקיית האב (איפה שנמצאים index.html ו-me.jpg)
// בתוך הקונטיינר, __dirname הוא /app/src, לכן '..' לוקח אותנו ל- /app
const rootPath = path.join(__dirname, '..');

// 1. הגדרת תיקיית הקבצים הסטטיים - זה מה שיאפשר גישה ל-me.jpg
app.use(express.static(rootPath));

// 2. ניתוב לדף הבית - שליחת ה-HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(rootPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}....`);
});

/*app.listen(port, '89.168.101.54', () => { //0.0.0.0
    console.log(`The server is running on port ${port}....`);
})*/

// http://localhost:3002/ עובד //8080 //3002
// http://89.168.101.54:3002/ לא עובד //8080 //3002
// http://89.168.101.54:80/ <----------------------------------------------- זה הנכון עכשיו

// http://89.168.101.54:80
// http://mor-devops.duckdns.org/
