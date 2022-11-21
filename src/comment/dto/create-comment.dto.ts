import { IsString,MinLength,MaxLength,IsInt,Min,IsPositive } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateUser_CommentDto {

@IsString()
@MinLength(10)
@MaxLength(80)
comment: string;


@IsInt()
@Min(1)
@IsPositive()
videoId: number;


@IsInt()
@Min(1)
@IsPositive()
user_id: number;

}

export class UpdateUser_CommentDto extends PartialType(CreateUser_CommentDto) {}