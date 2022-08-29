import { IsString, IsEmail, MinLength, MaxLength, IsOptional, IsPhoneNumber, IsDate } from "class-validator";

export class CreateClientDto {
    
    @IsString()
    @MinLength(1)
    @MaxLength(16)
    public name: string;

    @IsEmail()
    public email: string;

    @MinLength(1)
    @IsString()
    public company: string;

    @IsOptional()
    @IsString()
    public phone: string;

    @IsOptional()
    @IsString()
    public notes: string;
}
