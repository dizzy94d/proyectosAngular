export class User {
    public name: string;
    public lastName: string;
    public nif: string;


    constructor(name: string, lastname: string, nif: string) {
        this.name = name;
        this.lastName = lastname;
        this.nif = nif;
    }
}