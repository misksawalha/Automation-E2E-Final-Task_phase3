export interface CreateCandidatePayload {
    Candidate: {
        firstName: string,
        middleName: null,
        lastName: string,
        email: string,
        contactNumber: null,
        keywords: null,
        comment: null,
        dateOfApplication: string,
        consentToKeepData: boolean,
        vacancyId: Number
    }
}
