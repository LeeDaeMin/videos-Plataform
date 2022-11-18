import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    username: string;
}
