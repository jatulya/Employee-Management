import { Column, Entity, JoinColumn, OneToOne} from "typeorm";
import Abstract from "./abstract.entity";
import Address from "./address.entity";

export enum EmployeeRole {
  UI = 'UI',
  UX = 'UX',
  DEVELOPER = 'DEVELOPER',
  HR = 'HR'
}

@Entity() class Employee extends Abstract{
    @Column({unique : true}) email: string;
    @Column() name: string;
    @Column() age: number;
    @Column() password: string;
    
    @OneToOne(() => Address, (address) => address.employee, {
      cascade : true,
      onDelete : 'CASCADE'
    })
    @JoinColumn()
    address : Address

    @Column({
      type : 'enum',
      enum : EmployeeRole,
      default : EmployeeRole.DEVELOPER
    })
    role : EmployeeRole
  }
  
  export default Employee;
  