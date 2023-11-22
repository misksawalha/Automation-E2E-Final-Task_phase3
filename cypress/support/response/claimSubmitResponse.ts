export interface ClaimSubmitResponse {
    claim: {
        data: {
          
            id: Number,
            expenseType: {
                id: Number,
                name: string,
                status: boolean,
                isDeleted: boolean
            },
            amount: Number,
            note: null,
            date: string
        },
        meta: {
            total:Number,
             totalAmount: Number
        },
        rels: []
    }
}
