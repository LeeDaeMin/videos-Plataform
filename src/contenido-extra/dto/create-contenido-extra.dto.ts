import { IsInt, IsPositive, IsString, MaxLength, Min } from "class-validator";

export class CreateContenidoExtraDto {
    @IsInt()
    @Min(1)
    @IsPositive()
    videoId: number;
    @IsString()
    @MaxLength(80)
    descripcion: string;
    @IsString()
    @MaxLength(80)
    archivo: string;
}
