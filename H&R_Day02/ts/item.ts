

export class Item {
    constructor(private _id: number, private _name: string, private _price: number,
        private _color: string, private _date: string, private _desc: string,
        private _url: string, private _markForDelete: boolean) {

    }
    public set setId(v: number) {
        this._id = v;
    }
    public set setName(v: string) {
        this._name = v;
    }
    public set setPrice(v: number) {
        this._price = v;
    }
    public set setColor(v: string) {
        this._color = v;
    }
    public set setDate(v: string) {
        this._date = v;
    }
    public set setDesc(v: string) {
        this._desc = v;
    }
    public set setUrl(v: string) {
        this._url = v;
    }
    public set setMarkForDelete(v: boolean) {
        this._markForDelete = v;
    }
    public get getId(): number {
        return this._id
    }
    public get getName(): string {
        return this._name;
    }
    public get getPrice(): number {
        return this._price;
    }
    public get getColor(): string {
        return this._color;
    }
    public get getDate(): string {
        return this._date
    }
    public get getDesc(): string {
        return this._desc
    }
    public get getUrl(): string {
        return this._url
    }
    public get getMarkForDelete(): boolean {
        return this._markForDelete
    }
    toggle() {
        this._markForDelete = !this._markForDelete;
    }
}