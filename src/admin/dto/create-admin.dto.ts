import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateAdminDto {
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    username: string;
}
