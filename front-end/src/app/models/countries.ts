export class countries {
    id?: string;
    name: string;
    associatedUsers: [];
    currenciesAllowed: [];

    constructor(id: string, name: string, associatedUsers: [], currenciesAllowed: []) {
        this.id = id;
        this.name = name;
        this.associatedUsers = associatedUsers;
        this.currenciesAllowed = currenciesAllowed;
    }
}