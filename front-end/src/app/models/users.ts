export class Users {
    id?: string;
    email: string;
    password: string;
    role?: string;

    constructor(id: string, role: string, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}