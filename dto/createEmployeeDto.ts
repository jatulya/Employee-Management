import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested, IsEnum, IsDate, IsPositive, IsDateString } from "class-validator";
import { Type } from "class-transformer";
import { CreateAddressDto } from "./createAddressDto";
import { EmployeeRole, Status } from "../entities/employee.entity";
import { CreateDepartmentDto } from "./createDepartmentDto";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password : string;

  @ValidateNested()
  @Type(()=> CreateAddressDto)
  address : CreateAddressDto

  @IsEnum(EmployeeRole)
  role : EmployeeRole

  @IsEnum(Status)
  status : Status

  @IsString()
  @IsNotEmpty()
  employeeId : string

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  experience: number;

  @IsDateString()
  @IsNotEmpty()
  dateOfJoining : Date

  @IsNumber()
  department_id : number
}