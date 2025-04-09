const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log(req.method);
    console.log(req.path);
    next();
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`✅ Server avviato su http://localhost:${PORT}`)
})
