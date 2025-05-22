import { Column, Entity, JoinColumn, OneToOne} from "typeorm";
import Abstract from "./abstract.entity";
import Address from "./address.entity";

@Entity() class Employee extends Abstract{
    @Column({unique : true}) email: string;
    @Column() name: string;
    @Column() age: number;
    
    @OneToOne(() => Address, (address) => address.employee, {
      cascade : true,
      onDelete : 'CASCADE'
    })
    @JoinColumn()
    address : Address
  }
  
  export default Employee;
  