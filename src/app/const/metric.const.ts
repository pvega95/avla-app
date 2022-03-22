import { Movement } from "../models/movement";

interface IMetConst {
    [key: string] : {
        description: String ,
    }
}

interface IMetMethod {
    [key: string] : {
        fn: any ,
    }
}

export const METRIC_CONST: IMetConst = {
    '0': {
        description: "ENERO",
    },
    '1': {
        description: "FEBRERO",
        // function: (prop: number) => { return 1; }
    },
    '2': {
        description: "MARZO",
    },
    '3': {
        description: "ABRIL",
    },
    '4': {
        description: "MAYO",
    },
    '5': {
        description: "JUNIO",
    },
    '6': {
        description: "JULIO",
    },
    '7': {
        description: "AGOSTO",
    },
    '8': {
        description: "SETIEMBRE",
    },
    '9': {
        description: "OCTUBRE",
    },
    '10': {
        description: "NOVIEMBRE",
    },
    '11': {
        description: "DICIEMBRE",
    },
}

export const METRIC_METHODS: IMetMethod = {
    'TOTAL': {
        fn: (movements: any[]) => movements.reduce(
            (previousValue, currentValue) => previousValue + currentValue.amount,
            0
        )
    },
    'PROMEDIO': {
        fn: (movements: any[]) => movements.reduce(
            (previousValue, currentValue) => previousValue + currentValue.amount,
            0
        ) / movements.length
    },
    'MAXIMO': {
        fn: (movements: any[]) => movements.reduce(
            (previousValue, currentValue) => Math.max(currentValue.amount , previousValue ) , 0
        )
    },
    'MINIMO': {
        fn: (movements: any[]) => movements.reduce(
            (previousValue, currentValue) => Math.min(currentValue.amount , previousValue) , 0
        )
    },
}

export const METRICS_METHODS = ['TOTAL','PROMEDIO','MAXIMO','MINIMO'];