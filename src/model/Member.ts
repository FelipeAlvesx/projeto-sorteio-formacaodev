export default class Member {
    constructor(public name: string, public email: string) {
        this.name = name;
        this.email = email;
    }

    toString(): string {
        return `Nome: ${this.name} -  Email: ${this.email}`;
    }
}
