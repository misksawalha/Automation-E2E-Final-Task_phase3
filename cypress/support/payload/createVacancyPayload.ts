export interface CreateVacancyPayload {
    Vacancy: {
        name: string,
        jobTitleId: Number,
        employeeId: Number,
          numOfPositions: null,
          description: string,
          status: boolean,
          isPublished: boolean
    }
}
