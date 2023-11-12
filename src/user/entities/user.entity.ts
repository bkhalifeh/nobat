import { UtilService } from "src/util/util.service";
import { ObjectId } from "typeorm";
import PkId from 'src/util/database/pk.id';
export class User {
    @PkId()
    id: ObjectId | number;

}
