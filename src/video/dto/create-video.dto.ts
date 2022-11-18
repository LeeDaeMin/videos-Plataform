import { IsInt, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateVideoDto {
    @IsInt()
    @IsPositive()
    visualizaciones: number;
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    author: string;
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    titulo: string;
    @IsString()
    @MaxLength(80)
    descripcion: string;
}
