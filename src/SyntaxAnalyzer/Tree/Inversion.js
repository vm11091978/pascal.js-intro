import { TreeNodeBase } from './TreeNodeBase.js';

export class Inversion extends TreeNodeBase
{
    constructor(symbol, expr)
    {
        super(symbol);
        this.expr = expr;
    }
}
