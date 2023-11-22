import { CreateEventPayload } from "../payload/eventPayload";
import GenaricHelper from "../helpers/genericHelper";
import { eventVar } from "../variable/createEvent.var";

export default class NewEventInit {
    static initNewEvent(): CreateEventPayload {
        let createEventPayload: CreateEventPayload = {
            event: {
                name: eventVar.eventname,
                description: ' ',
                status: true
            }
        }
        return createEventPayload
    }
}