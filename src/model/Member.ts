export default class Member {
    constructor(public name: string, public email: string) {
        this.name = name;
        this.email = email;
    }

    get maskEmail(){
        const regex = /(.{1,3})(.*)(@.*)/
        return this.email.replace(regex, (_, g1, g2, g3) => {
            return g1 + "***" + g3;
        })
    }

    toString(): string {
        return `Nome: ${this.name} -  Email: ${this.maskEmail}`;
    }
}
