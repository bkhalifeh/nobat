import { IdColumn, IdType } from "src/util/database";
import { Entity } from "typeorm";

@Entity()
export class User {
    @IdColumn()
    id: IdType;
}