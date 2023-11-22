export interface JobSalaryResponse {
    JobSalary: {
        data: {
            id: Number,
            amount: string,
            salaryName: string,
            comment: null,
            payPeriod: {
                id: string,
                name: string
            },
            payGrade: {
                id: Number,
                name: string
            },
            currencyType: {
                id: string,
                name: string
            },
            directDebit: {
                id: null,
                routingNumber: null,
                account: null,
                amount: null,
                accountType: null
            }
        },
        meta: {
            empNumber: Number
        },
        rels: []
    }
}
