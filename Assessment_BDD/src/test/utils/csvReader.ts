import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';
export interface RegisterUser {
    type: string;
    gender: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
}
export function readRegisterData():RegisterUser[]{
    const filePath = path.resolve(__dirname,'../test-data/registerData.csv');
    const fileContent = fs.readFileSync(filePath,'utf-8');
    return parse(fileContent,{
        columns:true,
        skip_empty_lines:true,
        trim:true

    })as RegisterUser[];
}