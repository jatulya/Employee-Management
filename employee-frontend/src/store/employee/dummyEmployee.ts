import  { type EmployeeState }  from './employee.types'; // if in another file

export const employeesdummy: EmployeeState = {employees : [
  {
    employeeId: "EMP001",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 30,
    password: "default123",
    address: {
        houseNo: "123",
        line1: "Dummy Street",
        line2: "City A, 100001",
        pincode: '789556'
    },
    role: "UI",
    dateOfJoining: new Date("2021-03-15"),
    experience: 3,
    status: "ACTIVE",
    departmentId: 1
  },
  {
    employeeId: "EMP002",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    password: "default123",
    address: {
        houseNo: "456",
        line1: "Sample Ave",
        line2: "City B, 200002",
        pincode: ''
    },
    role: "DEVELOPER",
    dateOfJoining: new Date("2020-07-01"),
    experience: 4,
    status: "INACTIVE",
    departmentId: 2
  },
  {
    employeeId: "EMP003",
    name: "Charlie Lee",
    email: "charlie.lee@example.com",
    age: 28,
    password: "default123",
    address: {
        houseNo: "789",
        line1: "Test Blvd",
        line2: "City C, 300003",
        pincode: ''
    },
    role: "UX",
    dateOfJoining: new Date("2019-11-21"),
    experience: 5,
    status: "PROBATION",
    departmentId: 3
  },
  {
    employeeId: "EMP004",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    age: 32,
    password: "default123",
    address: {
        houseNo: "321",
        line1: "Example Lane",
        line2: "City D, 400004",
        pincode: ''
    },
    role: "HR",
    dateOfJoining: new Date("2022-05-10"),
    experience: 2,
    status: "ACTIVE",
    departmentId: 4
  },
  {
    employeeId: "EMP005",
    name: "Ethan Clark",
    email: "ethan.clark@example.com",
    age: 40,
    password: "default123",
    address: {
        houseNo: "654",
        line1: "Mockingbird Way",
        line2: "City E, 500005",
        pincode: ''
    },
    role: "DEVELOPER",
    dateOfJoining: new Date("2018-01-30"),
    experience: 6,
    status: "INACTIVE",
    departmentId: 5
  }
]};
