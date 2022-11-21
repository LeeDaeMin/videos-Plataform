import { IsString, MaxLength, MinLength } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateAdminDto {
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    username: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}