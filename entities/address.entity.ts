import {Column, Entity, OneToOne, JoinColumn} from 'typeorm'
import Abstract from './abstract.entity';
import Employee from './employee.entity';

@Entity() class Address extends Abstract{
    @Column() house_no: string;
    @Column() line1: string;
    @Column() line2: string;
    @Column() pincode: string;

   @OneToOne(() => Employee, (employee) => employee.address, {
     onDelete: 'CASCADE'
    })
    @JoinColumn()
    employee: Employee;
}

export default Address