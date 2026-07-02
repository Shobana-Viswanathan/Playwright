import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

export interface registerUser{
    type:string,
    fname:string,
    lname:string,
    email:string,
    tele:string,
    password:string,
    passconfirm:string,


}
export function readRegData():registerUser[]{
    const filepath=path.resolve(__dirname,'../test-data/registerData.csv');
    const filecontent=fs.readFileSync(filepath,'utf-8');
    return parse(
        filecontent,{
           columns:true,
           skip_empty_lines:true,
           trim:true
        }
    ) as registerUser[];
}