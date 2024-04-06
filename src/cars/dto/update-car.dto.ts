import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    @IsString({message: "The id must be a string"})
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: "The brand must be a string"})
    @IsOptional()
    readonly brand?: string;

    @IsString({message: "The model must be a string"})
    @IsOptional()
    readonly model?: string;
}