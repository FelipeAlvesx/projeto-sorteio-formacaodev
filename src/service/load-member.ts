import fs from "fs";
import Member from "../model/Member";


export default function loadMember(file: string): Member[] {
    const data = fs.readFileSync(file, "utf-8");
    const lines = data.split("\n");

    const members = lines.filter((l) => l.trim().length > 0)
    .map((lines) => {
        const [name, email] = lines.split(";");
        return new Member(name, email);
    })

    return members;
} 