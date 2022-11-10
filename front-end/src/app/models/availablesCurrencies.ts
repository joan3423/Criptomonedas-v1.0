export class availablesCurrenciesList {
    id?: string;
    name: string;
    symbol: string;
    value: number;

    constructor(id: string, name: string, symbol: string, value: number) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.value = value;
    }
}