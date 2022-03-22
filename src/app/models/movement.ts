export interface IMovement {
    id: String;
    amount: Number | String;
    date: String;
    family: String;
}

export class Movement {
    id: String;
    amount: Number | any;
    date: Date | any;
    family: String;
    constructor(movement: IMovement) {
        this.id = movement.id || null;
        this.amount = (typeof movement.amount === "string") ? parseInt(movement.amount) : movement.amount || 0;
        this.date = movement.date || null;
        this.family = movement.family || null;
    }
}