import { Column, Entity, OneToOne, ManyToOne} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
import Department from "./department.entity";

export enum EmployeeRole {
  UI = 'UI',
  UX = 'UX',
  DEVELOPER = 'DEVELOPER',
  HR = 'HR'
}

export enum Status {
  INACTIVE ='INACTIVE',
  ACTIVE = 'ACTIVE',
  PROBATION = 'PROBATION'
}

@Entity() class Employee extends AbstractEntity{
    @Column({unique : true}) email: string;
    @Column() name: string;
    @Column() age: number;
    @Column() password: string;
    
    @OneToOne(() => Address, (address) => address.employee, {
    cascade: true
    })
    address: Address

    @Column({
      type : 'enum',
      enum : EmployeeRole,
      default : EmployeeRole.DEVELOPER
    })
    role : EmployeeRole

    @ManyToOne(() => Department, (department) => department.employee)
    department: Department

    @Column({
      type : 'enum',
      enum : Status,
      default : Status.ACTIVE
    })
    status : Status

    @Column()
    experience : number

    @Column()
    employeeId : string

    @Column()
    dateOfJoining : Date
  }
  
  export default Employee;
  