import fs from "fs";
import Member from "../model/Member";

export default function loadMember(file: string): Member[] {
    const data = fs.readFileSync(file, "utf-8");
    console.log(data);
    return [];
}