import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../../../env/.env.qa")
});

export class EnvReader {
    static getBaseUrl(): string {
        return process.env.BASE_URL!;
    }
}