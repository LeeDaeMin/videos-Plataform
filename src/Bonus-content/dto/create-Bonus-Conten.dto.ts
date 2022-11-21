import { IsInt, IsPositive, IsString, MaxLength, Min } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateBonusContentDto {
    @IsInt()
    @Min(1)
    @IsPositive()
    videoId: number;
    @IsString()
    @MaxLength(80)
    descripcion: string;
    @IsString()
    @MaxLength(80)
    file: string;
}

export class UpdateBonusContentDto extends PartialType(CreateBonusContentDto) {}
