import express from 'express'
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { join } from 'path'
import { dirname } from 'path'
import bodyParser from 'body-parser'




const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next)=>{
    console.log(req.method);
    console.log(req.path);
    next();
})

app.get("/", async (req, res)=> {
    res.sendFile(join(__dirname, 'public', 'index.html'));
})

app.use(express.static(join(__dirname, 'public')));

const PORT = 8080
app.listen(PORT, () => {
    console.log(`✅ Server avviato su http://localhost:${PORT}`)
})

