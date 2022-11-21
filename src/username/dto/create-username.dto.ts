import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateUsernameDto {
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    username: string;
    
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    profile: string;
}

export class UpdateUsernameDto extends PartialType(CreateUsernameDto) {}