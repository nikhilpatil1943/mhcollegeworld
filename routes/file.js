import express from "express";
const router = express();
import path from "path"
import {fileURLToPath} from 'url';
import { access, constants } from 'node:fs'

const __filename =fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get("/:dtecode",(req,res)=>{
    const {dtecode} = req.params
    const filePath = path.join(__dirname,"/cet_cutoff",`${dtecode}.pdf`)
    access(filePath, constants.F_OK,(err)=>{
        !err?res.sendFile(filePath):res.send("Enter Valid URL")
    })
})


export default router