import { Entity, ObjectId } from "typeorm";
import PkId from 'src/util/database/pk.id';

@Entity()
export class User {
    @PkId()
    id: ObjectId | number;
}