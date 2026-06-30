import * as XLSX from "xlsx";
import path from "path";

export interface LoginUser {
    type: string;
    username: string;
    password: string;
}

export function readExcelData(): LoginUser[] {

    const filePath = path.resolve(__dirname, "../test-data/loginData.xlsx");

    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
      if (!sheetName) {
        throw new Error("No worksheet found in loginData.xlsx");
    }
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) {
        throw new Error(`Worksheet '${sheetName}' not found.`);
      }

    const data = XLSX.utils.sheet_to_json<LoginUser>(worksheet);

    return data;
}