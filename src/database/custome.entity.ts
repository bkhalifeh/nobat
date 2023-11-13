import { IdColumn, IdType } from './custome.id';

export abstract class CustomeEntity {
    @IdColumn()
    id: IdType;
}
