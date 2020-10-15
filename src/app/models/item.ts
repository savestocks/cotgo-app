import { Validable } from './validable';

export class Item implements Validable{
    id: string;
    initial: string;
    name: string;
    groupId: string;

    valid(): boolean {
        return Boolean(this.initial  && this.name && this.groupId);
    }
}
