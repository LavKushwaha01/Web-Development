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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    res.json({
        users
    });
}));
app.listen(3000);
const client = new client_1.PrismaClient();
function insertUser(username, password, city, age) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield client.user.create({
                data: {
                    username,
                    password,
                    city,
                    age,
                }
            });
            console.log(res);
        }
        catch (error) {
            console.error("Insert error:", error);
        }
    });
}
//insertUser("admin1", "123456", "harkirat", 90);
function deleteuser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 2
            }
        });
    });
}
// deleteuser()
function updateuser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: {
                id: 1
            },
            data: {
                city: "allahabad"
            }
        });
    });
}
// updateuser()
function usertodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            include: {
                todos: true
            }
        });
        console.log(user);
    });
}
// usertodos()
