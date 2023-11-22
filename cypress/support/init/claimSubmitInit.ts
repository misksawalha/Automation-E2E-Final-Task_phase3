
import { ClaimSubmitPayload } from "../payload/claimSubmitPayload";
import GenaricHelper from "../helpers/genericHelper";
import { expenesId } from "../../support/helpers/expenesHelper"

// const currentDate = new Date();
// const formattedDate = formatDate(currentDate);

export default class ClaimSubmitInit {
    static initClaimSubmit(): ClaimSubmitPayload {
        let createClaimSubmitPayload: ClaimSubmitPayload = {
            claim: {
                expenseTypeId:expenesId,
                date: "2023-11-09",
                amount: "50000.00",
                "note": null
            }
        }
        return createClaimSubmitPayload
    }
}