export interface CreateVacancyResponse {
    Vacancy: {
        data: {
            id: Number,
            name: string,
            description: string,
            numOfPositions: null,
            status: true,
            isPublished: true,
            jobTitle: {
                id: Number,
                title: string,
                isDeleted: false
            },
            hiringManager: {
                id: Number,
                firstName: string,
                middleName: string,
                lastName: string,
                terminationId: null
            }
        },
        meta: [],
        rels: []
    }
}
