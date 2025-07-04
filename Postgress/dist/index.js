"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const pgClient = new Client({
//   user: "neondb_owner",
//   password:"npg_lg4q0nTZphtQ",
//   port: 432,
//   host: "p-ancient-wildflower-ab8v7qvr-pooler.eu-west-2.aws.neon.tech",
//   database:"neondb",
//   ssl: true
// });
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_lg4q0nTZphtQ@ep-ancient-wildflower-ab8v7qvr-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
pgClient.connect();
// async function main() {
// //  const response = await pgClient.query("SELECT * FROM users");
//   const response = await pgClient.query("UPDATE users SET username='lavkushwaha' WHERE Id=2")
//  console.log(response.rows);
// }
// main()
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = 'INSERT INTO users (username , email, password ) VALUES ($1, $2, $3);';
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        res.json({
            message: "you have signed up"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "signup failed"
        });
    }
}));
app.listen(3000);
