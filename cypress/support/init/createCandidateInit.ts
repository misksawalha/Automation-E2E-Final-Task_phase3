import { CreateCandidatePayload } from "../payload/createCandidatePayload";
import GenaricHelper from "../helpers/genericHelper";
import { vacancyId } from "../helpers/createVacancyHelper";
export default class CreateCandidateInit {
    static initCreateCandidate(): CreateCandidatePayload {
        let createCandidatePayload: CreateCandidatePayload = {
            Candidate: {
                firstName: "misk",
                middleName: null,
                lastName: "sawallha",
                email: "misksawallha@gmail.com",
                contactNumber: null,
                keywords: null,
                comment: null,
                dateOfApplication: "2024-11-11",
                consentToKeepData: false,
                vacancyId: vacancyId
            }
        }
        return createCandidatePayload
    }
}