import { IsInt, IsPositive, IsString, MaxLength, MinLength } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateVideoDto {
    @IsInt()
    @IsPositive()
    views: number;
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    author: string;
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    title: string;
    @IsString()
    @MaxLength(80)
    descripcion: string;
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    src:string;
}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}