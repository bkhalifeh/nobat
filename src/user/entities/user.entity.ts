import { UtilService } from "src/util/util.service";
import { ObjectId } from "typeorm";

export class User {

    @UtilService.PkId()
    id: ObjectId | number;

}
