import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested, IsEnum, IsPositive} from "class-validator";
import { Type } from "class-transformer";
import { CreateAddressDto } from "./createAddressDto";
import { EmployeeRole, Status } from "../entities/employee.entity";
import { CreateDepartmentDto } from "./createDepartmentDto";
import Department from "../entities/department.entity";

export class UpdateEmployeeDto{
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  // @IsString()
  // @MinLength(5)
  // password : string;

  @ValidateNested()
  @Type(()=> CreateAddressDto)
  address : CreateAddressDto

  @IsEnum(EmployeeRole)
  role : EmployeeRole
  
  @IsEnum(Status)
  status : Status

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  experience: number;

  @IsNumber()
  department_id : number
}