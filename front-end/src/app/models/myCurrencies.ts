export class MyCurrencies {
    id?: string;
    name?: string;
    symbol?: string;
    value?: number;
    inPossession?: number;

    constructor(id: string, name: string, symbol: string, value: number, inPossession: number) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.value = value;
        this.inPossession = inPossession;
    }
}
