import { Validable } from './validable';

export class Purchase  implements Validable{
    id: string;
    itemId: string;
    qtd: number;
    price: number;
    marketId: string;

    valid(): boolean {
        return Boolean(0 < this.qtd && 0 < this.price && this.marketId && this.itemId)
    }

}
