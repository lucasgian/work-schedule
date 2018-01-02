export class TaskUser {
    private id:number;
    private name:string;
    private date:string;
    private prio:number;

    constructor(id:number, name:string, dateEnd:string, prio:number) {
        this.id = id;
        this.name = name;
        this.date = dateEnd;
        this.prio = prio;
    }

    getName():string {
        return this.name;
    }

    getId():number {
        return this.id;
    }

    getDate():string {
        return this.date;
    }

    getPrio():number {
        return this.prio;
    }
}
