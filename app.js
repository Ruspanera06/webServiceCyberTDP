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

app.get("/aziende", async (req, res)=>{
    const response = await fetch(`https://haveibeenpwned.com/api/v3/breaches/${req.query.Domain!==undefined?`?Domain=${req.query.Domain}`:""}`);
    if (!response.ok) {
        return res.status(response.status).json({ error: 'Errore nella richiesta' });
    }
    let data = await response.json();
    if(req.query.limit !== undefined){
        data = data.slice(0, 25);
    }
    let filteredData = [];
    if(req.query.name || req.query.title || req.query.domain || req.query.breachdate || req.query.pwncount ||
        req.query.description || req.query.logopath || req.query.dataclasses
    ){
        classesFilters = false;
        if (req.query.DataClasses){
            let dataClasses = req.query.DataClasses.split(',');
            classesFilters = true;
        }
        filteredData = data.map(x=>{
            if(classesFilters){
                if(!x.DataClasses.some(item => dataClasses.includes(item))) {
                    return null
                }
            }
            let filteredX = {};
            if(req.query.name) filteredX["Name"] = x.Name;
            if(req.query.title) filteredX["Title"] = x.Title;
            if(req.query.domain) filteredX["Domain"] = x.Domain;
            if(req.query.breachdate) filteredX["BreachDate"] = x.BreachDate;
            if(req.query.pwncount) filteredX["PwnCount"] = x.PwnCount;
            if(req.query.description) filteredX["Description"] = x.Description;
            if(req.query.logopath) filteredX["LogoPath"] = x.LogoPath;
            if(req.query.dataclasses) filteredX["DataClasses"] = x.DataClasses;
            return filteredX;
        }).filter(item => item !== null);
    }
    else{
        filteredData = data.map(x=>{
            return {
                "Name": x.Name,
                "Title": x.Title,
                "Domain": x.Domain,
                "BreachDate": x.BreachDate,
                "PwnCount": x.PwnCount,
                "Description": x.Description,
                "LogoPath": x.LogoPath,
                "DataClasses": x.DataClasses,
            }
        })
    }
    console.log('Dati ricevuti:', filteredData.length);
    res.json(filteredData);
})

app.use(express.static(join(__dirname, 'public')));

const PORT = 8080
app.listen(PORT, () => {
    console.log(`✅ Server avviato su http://localhost:${PORT}`)
})

