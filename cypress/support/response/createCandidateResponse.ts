export interface CreateCandidateResponse {
    Candidate:{
        data: {
            id: Number,
            firstName: string,
            middleName: null,
            lastName: string,
            email: string,
            contactNumber: null,
            comment: null,
            keywords: null,
            modeOfApplication: Number,
            dateOfApplication: string,
            vacancy: {
                id: Number,
                name: string,
                status: boolean,
                jobTitle: {
                    id: Number,
                    title: string,
                    isDeleted: boolean
                },
                hiringManager: {
                    id: Number,
                    firstName: string,
                    middleName: string,
                    lastName: string,
                    terminationId: null
                }
            },
            status: {
                id: Number,
                label: string
            },
            hasAttachment: boolean,
            consentToKeepData: boolean
        },
        meta: [],
        rels: []
    }
}