import express from 'express'
import React from 'react'
import {renderToString} from "react-dom/server"
// import HomePage from './src/pages/HomePage'
import AboutPage from './src/pages/AboutPage'
import {StaticRouter} from 'react-router-dom/server'
import App from './src/App'
import fs from "fs"
import path from "path"

const app = express()

app.use(express.static("./build", {index: false}))

app.get("/*",(req, res)=>{ 
    const reactApp = renderToString(
        //  <AboutPage/>
        <StaticRouter>
         <App/>
       
        </StaticRouter>
       

    )

    const htmlTemplate = path.resolve("./build/index.html")
    fs.readFile(htmlTemplate, 'utf8',(err,data)=> {
        if(err){
            return res.send(err)
        }

        // console.log({data});

        return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${reactApp}</div>`))
    })

  //  res.send(`<html><body><div id="root">${reactApp}</div></body></html>`)
})

 
app.listen(8050, ()=>{
    console.log(`server runing on ${8050}`);
})