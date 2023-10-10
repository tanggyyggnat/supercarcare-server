import { PrismaClient, ROLE } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {

    const createJobRole = await prisma.jobRole.createMany ({
        data: [{
            jobName: "Car Wash Facility Manager"
        },{
            jobName: "Car Wash Attendant"
        },{
            jobName: "Automotive Technician"
        },{
            jobName: "Engine Mechanic"
        },{
            jobName: "Tire Technician"
        },{
            jobName: "Customer Service Representative"
        },{
            jobName: "Engine Detailer"
        },{
            jobName: "Automotive Painter"
        }]
    })


    const newAccountEmployee = await prisma.account.createMany({
        data: [{
            accountName: "JeenaPeam",
            password: "JeenaJeena",
            role: ROLE.EMPLOYEE
        },{
            accountName: "Khaoismynickname",
            password: "KhaoKhao",
            role: ROLE.EMPLOYEE
        },{
            accountName: "Punchtn",
            password: "PunchPunch",
            role: ROLE.EMPLOYEE
        },{
            accountName: "Aimachissoyo",
            password: "AiAi",
            role: ROLE.EMPLOYEE
        },{
            accountName: "Tanggyyggnat",
            password: "TanggyTanggy",
            role: ROLE.EMPLOYEE
        },{
            accountName: "Exrthaaa_",
            password: "EarthEarth",
            role: ROLE.EMPLOYEE
        },{
            accountName: "I7tew",
            password: "TewTew",
            role: ROLE.EMPLOYEE
        },  
    ]
    });

    const newEmployee = await prisma.employee.createMany ({
        data: [{
            jobId: 1,
            empName: "Jeena",
            empSurname: "Kerdkaew",
            empPhone: "095-251-3965",
            empSalary: 30000,
            accountId: 1
        },{
            jobId: 2,
            empName: "Natatapon",
            empSurname: "Wowwow",
            empPhone: "095-099-7850",
            empSalary: 30000,
            accountId: 2
        },{
            jobId: 3,
            empName: "Nattanan",
            empSurname: "Knamsamood",
            empPhone: "087-989-5435",
            empSalary: 30000,
            accountId: 3
        },{
            jobId: 4,
            empName: "Natnicha",
            empSurname: "Feungfu",
            empPhone: "099-456-5432",
            empSalary: 30000,
            accountId: 4
        },{
            jobId: 5,
            empName: "Kunratida",
            empSurname: "Rattanavijit",
            empPhone: "097-090-8573",
            empSalary: 30000,
            accountId: 5
        },{
            jobId: 6,
            empName: "Chanmatha",
            empSurname: "Saknunsab",
            empPhone: "087-987-3464",
            empSalary: 30000,
            accountId: 6
        },{
            jobId: 7,
            empName: "Pornsek",
            empSurname: "Chuanmee",
            empPhone: "076-363-2212",
            empSalary: 30000,
            accountId: 7
        },]
    });

    const newAccount = await prisma.account.createMany ({
        data: [{
            accountName: "_ttae.nk",
            password: "TaeTae",
            role: ROLE.CUSTOMER
        },{
            accountName: "Dra._.kritt_",
            password: "KritKrit",
            role: ROLE.CUSTOMER
        },{
            accountName: "jrv_sugardrop",
            password: "EarthJaJa",
            role: ROLE.CUSTOMER
        },{
            accountName: "Pxtzm",
            password: "PutterPutter",
            role: ROLE.CUSTOMER
        },  
        ]
    });
    

    const newCustomer = await prisma.customer.createMany ({
        data: [{
            custName: "Tanakit",
            custSurname: "Singsung",
            custPhone: "098-466-3252",
            custEmail: "65070090@kmitl.ac.th",
            accountId: 8
        },{
            custName: "Drakrit",
            custSurname: "Prongmai",
            custPhone: "098-746-6334",
            custEmail: "65070078@kmitl.ac.th",
            accountId: 9
        },{
            custName: "Jaruvit",
            custSurname: "Jongcheakang",
            custPhone: "075-674-3454",
            custEmail: "65070032@kmitl.ac.th",
            accountId: 10
        },{
            custName: "Phakhawat",
            custSurname: "Panpakdeewong",
            custPhone: "098-456-1243",
            custEmail: "65070247@kmitl.ac.th",
            accountId: 11
        },]
    });

    const newStock = await prisma.stock.createMany ({
        data: [{
            stockName: "Battery",
            stockQuantity: 5,
        },{
            stockName: "Compressor", //คอมเพรสเซอร์แอร์
            stockQuantity: 5,
        },{
            stockName: "Condenser", //หม้อแอร์ 
            stockQuantity: 8,
        },{
            stockName: "Engine Oil", //น้ำมันเครื่อง
            stockQuantity: 8,
        },{
            stockName: "Oil Filter", //กรองน้ำมัน
            stockQuantity: 8,
        },{
            stockName: "Tires", //ยางรถยนต์
            stockQuantity: 20,
        },{
            stockName: "Transmission Fluid", //น้ำมันเกียร์
            stockQuantity: 10,
        },{
            stockName: "Transmission Filter", //กรองน้ำมันเกียร์
            stockQuantity: 10,
        },{
            stockName: "Gasket Kit", //ชุดประสานเครื่อง 
            stockQuantity: 5,
        },{
            stockName: "Electrical Wiring", //สายส่งไฟฟ้า
            stockQuantity: 5,
        },{
            stockName: "Brake Lines", //สายเบรก
            stockQuantity: 10,
        },{
            stockName: "Belts", //สายเบรก
            stockQuantity: 10,
        },{
            stockName: "Brake Lines", //สายพาน
            stockQuantity: 10,
        },{
            stockName: "Radiator Coolant", //น้ำหม้อน้ำ
            stockQuantity: 12,
        },{
            stockName: "Cleaning Chemicals", //น้ำยาทำความสะอาด
            stockQuantity: 15,
        },]
    });

    const newServiceType = await prisma.serviceType.createMany ({
        data: [{
            serviceTypeName: "Car Washing"
        },{
            serviceTypeName: "Car Repair"
        },{
            serviceTypeName: "Car Inspection"
        }]
    });

    const newSubservice = await prisma.subservice.createMany ({
        data: [{
            serviceTypeId: 1,
            subServiceName: "Check In",
            price: 0
        },{
            serviceTypeId: 1,
            subServiceName: "Exterior Wash", //การล้างภายนอก
            price: 500
        },{
            serviceTypeId: 1,
            subServiceName: "Interior Cleaning", //การทำความสะอาดภายใน
            price: 1000
        },{
            serviceTypeId: 1,
            subServiceName: "Full-Service Wash", //การล้างรถบริการครบวงจร
            price: 1200
        },{
            serviceTypeId: 1,
            subServiceName: "Engine Cleaning", //การทำความสะอาดเครื่องยนต์
            price: 1000
        },{
            serviceTypeId: 1,
            subServiceName: "Air Conditioner Cleaning", //การทำความสะอาดระบบปรับอากาศ
            price: 800
        },{
            serviceTypeId: 2,
            subServiceName: "Check In",
            price: 0
        },{
            serviceTypeId: 2,
            subServiceName: "Air Conditioning System Repair", // การซ่อมระบบปรับอากาศ 
            price: 3000
        },{
            serviceTypeId: 2,
            subServiceName: "Engine Oil Change", //การเปลี่ยนน้ำมันเครื่อง 
            price: 800
        },{
            serviceTypeId: 2,
            subServiceName: "Tire Change", //การเปลี่ยนยางรถยนต์
            price: 3000
        },{
            serviceTypeId: 2, 
            subServiceName: "Transmission Fluid Change", //การเปลี่ยนน้ำมันเกียร์
            price: 2500
        },{
            serviceTypeId: 2,
            subServiceName: "Engine Repair", //การซ่อมเครื่องยนต์
            price: 4000
        },{
            serviceTypeId: 3,
            subServiceName: "Check In",
            price: 0
        },{
            serviceTypeId: 3,
            subServiceName: "Engine Diagnostics", //การวิเคราะห์เครื่องยนต์
            price: 1500
        },{
            serviceTypeId: 3,
            subServiceName: "Electrical System Check", // การตรวจสอบระบบไฟฟ้า
            price: 1000 
        },{
            serviceTypeId: 3,
            subServiceName: "Brake System Inspection", //การตรวจสอบระบบเบรค
            price: 800
        },{
            serviceTypeId: 3,
            subServiceName: "Engine Compartment Maintenance", //การบำรุงรักษาร่วมพระเอกเครื่องยนต์
            price: 2000
        }]
    });

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
