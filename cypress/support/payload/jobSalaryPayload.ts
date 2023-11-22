export interface JobSalaryPayload {
    JobSalary: {
        salaryComponent: string,
        salaryAmount: string,
        payGradeId: Number,
        currencyId: string,
        payFrequencyId: string,
        comment: null,
        addDirectDeposit: boolean
    }
}
