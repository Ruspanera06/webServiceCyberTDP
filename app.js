const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log(req.method);
    console.log(req.path);
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 8080
app.listen(PORT, () => {
    console.log(`✅ Server avviato su http://localhost:${PORT}`)
})
