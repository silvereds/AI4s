export const schedule_repayment1 = [
    {
        id:1,
        due_date:'12-06-2022',
        amount_due:60000,
        paid:60000,
        date_paid:'12-06-2022',
        penalty:0,
        notes:'View Note',
        status:'Fully Paid'
    },
    {
        id:2,
        due_date:'12-07-2022',
        amount_due:60000,
        paid:50000,
        date_paid:'12-06-2022',
        penalty:500,
        notes:'',
        status:'Partially Paid'
    },
    {
        id:3,
        due_date:'12-08-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:'Active'
    },
    {
        id:4,
        due_date:'12-09-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:5,
        due_date:'12-10-2022',
        amount_due:60000,
        paid:50000,
        date_paid:'',
        penalty:550,
        notes:'',
        status:'Overdue'
    },
]

export const schedule_repayment2 = [
    {
        id:1,
        due_date:'12-06-2022',
        amount_due:60000,
        paid:60000,
        date_paid:'12-06-2022',
        penalty:0,
        notes:'View Note',
        status:'Fully Paid'
    },
    {
        id:2,
        due_date:'12-07-2022',
        amount_due:60000,
        paid:50000,
        date_paid:'12-06-2022',
        penalty:500,
        notes:'',
        status:'Partially Paid'
    },
    {
        id:3,
        due_date:'12-08-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:'Active'
    },
    {
        id:4,
        due_date:'12-09-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
]

export const schedule_repayment3 = [
    {
        id:1,
        due_date:'12-06-2022',
        amount_due:60000,
        paid:60000,
        date_paid:'12-06-2022',
        penalty:0,
        notes:'View Note',
        status:'Fully Paid'
    },
    {
        id:2,
        due_date:'12-07-2022',
        amount_due:60000,
        paid:50000,
        date_paid:'12-06-2022',
        penalty:500,
        notes:'',
        status:'Partially Paid'
    },
    {
        id:3,
        due_date:'12-08-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:'Active'
    },
    {
        id:4,
        due_date:'12-09-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:5,
        due_date:'12-10-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:6,
        due_date:'12-10-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:7,
        due_date:'12-11-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:8,
        due_date:'12-12-2022',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:9,
        due_date:'12-01-2023',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
    {
        id:10,
        due_date:'12-02-2023',
        amount_due:60000,
        paid:0,
        date_paid:'',
        penalty:0,
        notes:'',
        status:''
    },
]
export const loans = [
    {
        id:1,
        enterprise_id:1,
        original_amount:540000,
        outstanding_amount:50000,
        loan_terms:5,
        next_payment:(new Date()).toUTCString().substring(0,17),
        penalty_amount:10000,
        monthly_installment:60000,
        due_date:(new Date()).toUTCString().substring(0,17),
        isActive:true,
        schedule_repayment:schedule_repayment1
    },
    {
        id:2,
        enterprise_id:2,
        original_amount:440000,
        outstanding_amount:60000,
        penalty_amount:5000,
        monthly_installment:50000,
        loan_terms:4,
        next_payment:(new Date()).toUTCString().substring(0,17),
        due_date:(new Date()).toUTCString().substring(0,17),
        isActive:false,
        schedule_repayment:schedule_repayment2
    },
    {
        id:3,
        enterprise_id:3,
        original_amount:240000,
        outstanding_amount:55000,
        loan_terms:10,
        penalty_amount:4000,
        monthly_installment:50000,
        next_payment:(new Date()).toUTCString().substring(0,17),
        due_date:(new Date()).toUTCString().substring(0,17),
        isActive:false,
        schedule_repayment:schedule_repayment3
    },
    {
        id:4,
        enterprise_id:4,
        original_amount:740000,
        outstanding_amount:70000,
        penalty_amount:8000,
        monthly_installment:50000,
        loan_terms:0,
        next_payment:(new Date()).toUTCString().substring(0,17),
        due_date:(new Date()).toUTCString().substring(0,17),
        isActive:true,
        schedule_repayment:[]
        //schedule_repayment4
    },
]

export const loans_documents = [
    {
        id:1,
        loan_id:3,
        document_name:'Bussness registration',
        download_link:'#'
    },
    {
        id:2,
        loan_id:2,
        document_name:'Tax Payment document',
        download_link:'#'
    },
    {
        id:3,
        loan_id:1,
        document_name:'Bussness registration',
        download_link:'#'
    },
    {
        id:4,
        loan_id:1,
        document_name:'Task Payer document',
        download_link:'#'
    },
    {
        id:5,
        loan_id:2,
        document_name:'Bussness registration',
        download_link:'#'
    },
    {
        id:6,
        loan_id:1,
        document_name:'Bank statement of sales for 6 months',
        download_link:'#'
    },
    {
        id:6,
        loan_id:3,
        document_name:'Bussness registration',
        download_link:'#'
    },
]