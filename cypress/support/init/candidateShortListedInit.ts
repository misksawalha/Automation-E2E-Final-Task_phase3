import { CandidateShortListedPayload } from "../payload/candidateShortListedPayload";
import GenaricHelper from "../helpers/genericHelper";
import { vacancyId } from "../helpers/createVacancyHelper";

export default class candidateShortListedPayloadInit {
    static initCandidateShortListed(): CandidateShortListedPayload {
        let candidateShortListedPayload: CandidateShortListedPayload = {
            ShortListed: {
                note: null
            }
        }
        return candidateShortListedPayload
    }
}