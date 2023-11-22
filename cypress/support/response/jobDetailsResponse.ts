export interface JobDetailsResponse {
    JobDetails: {
        data: {
            empNumber: Number,
            joinedDate: null,
            jobTitle: {
                id: Number,
                title: string,
                isDeleted: false
            },
            jobSpecificationAttachment: {
                id: null,
                filename: null
            },
            empStatus: {
                id: null,
                name: null
            },
            jobCategory: {
                id: null,
                name: null
            },
            subunit: {
                id: null,
                name: null,
                unitId: null
            },
            location: {
                id: Number,
                name: string
            },
            employeeTerminationRecord: {
                id: null,
                date: null
            }
        },
        meta: [],
        rels: []
    }
}
