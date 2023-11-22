
import { CreateCalimRequestPayload } from "../payload/claimRequestPayload";
import GenaricHelper from "../helpers/genericHelper";
import { eventId } from "../../support/helpers/eventHelper"

export default class ClaimRequestInit {
    static initClaimRequest(): CreateCalimRequestPayload {
        let createClaimRequestPayload: CreateCalimRequestPayload = {
            request: {
                claimEventId: eventId,
                currencyId: "ECS",
                remarks: null
            }
        }
        return createClaimRequestPayload
    }
}