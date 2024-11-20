const express = require('express');
const app = express();
app.get('/' , (req,res) => {
    res.send("<h1> Hello!!! </h1>");

})
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})