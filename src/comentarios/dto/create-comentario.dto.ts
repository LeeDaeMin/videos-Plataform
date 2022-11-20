import { IsString,MinLength,MaxLength,IsInt,Min,IsPositive } from "class-validator";

// export class CreateComentarioDto {

//   @IsInt()
//   @Min(1)
//   @IsPositive()
//   id_video: number;
// }

export class CreateUser_ComentarioDto {

@IsString()
@MinLength(10)
@MaxLength(80)
comentario: string;


@IsInt()
@Min(1)
@IsPositive()
videoId: number;


@IsInt()
@Min(1)
@IsPositive()
user_id: number;

}