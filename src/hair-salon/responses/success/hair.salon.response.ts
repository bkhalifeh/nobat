import { ApiProperty } from "@nestjs/swagger";
import { CommentResponse } from "src/comment/responses/successful/comment.response";
import { IdType } from "src/database/custome.id";
import { HairSalon } from "src/hair-salon/entities/hair-salon.entity";
import { TurnInfoResponse } from "src/turn/responses/successful/info.turn.response";
import { TurnResponse } from "src/turn/responses/successful/turn.response";
import { UserResponse } from "src/user/response/successful/user.response";

export class HairSalonResponse {

    @ApiProperty({
        description: 'The ID of the created hair salon in the database is stored here.',
        example: '1'
    })
    id: string;

    @ApiProperty({
        description: 'The name of the hair salon is stored in this field.',
        example: 'Hadi',
    })
    name: string;

    @ApiProperty({
        description: 'The description of the hair salon is stored in this field.',
        example: 'I am the best hair stylist.',
    })
    description: string;

    @ApiProperty({
        description: 'The address of the hair salon is stored in this field.',
        example: 'bushehr - bushehr - emam blvd',
    })
    address: string;

    @ApiProperty({
        description: 'The image of the hair salon is stored in this field.',
        example: '/static/upload/example.png',
    })
    image: string;

    @ApiProperty({
        description: 'The score of the hair salon is stored in this field.',
        example: 4.5,
    })
    score: number;

    
    @ApiProperty({
        type: [TurnResponse],
        description: 'The presentation of hair salon turns is stored in this field.',
        required: false
    })
    turns?: TurnResponse[];

    @ApiProperty({
        type: UserResponse,
        description: 'The relevant information about the hair stylist is placed in this field.',
        required: false
    })
    user?: UserResponse;

    @ApiProperty({
        type: [CommentResponse],
        description: 'The presentation of hair salon comments is stored in this field.',
        required: false
    })
    comments?: CommentResponse[];


    constructor(hairSalon: HairSalon, info: boolean) {
        this.id = hairSalon.id.toString();
        this.name = hairSalon.name;
        this.description = hairSalon.description;
        this.address = hairSalon.address;
        this.image = hairSalon.image;
        this.score = hairSalon.score;
        
        if (info) {
            this.comments = CommentResponse.fromArray(hairSalon.comments);
            this.turns = TurnResponse.fromArray(hairSalon.turns);
            this.user = new UserResponse(hairSalon.user);
        }
    }

    static fromArray(hairSalons: HairSalon[]): HairSalonResponse[] {
        return hairSalons.map(hs => new HairSalonResponse(hs, false));
    }
}