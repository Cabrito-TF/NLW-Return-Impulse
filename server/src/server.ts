import express from "express";
import { prisma } from "./prisma";
import nodemailer from 'nodemailer';
import { routes } from "./router";


const app = express();

app.use(express.json());
app.use(routes);



app.listen(3333,()=>{
console.log('Working...')
});