import { CreateExpenesPayload } from "../payload/expenesPayload";
import GenaricHelper from "../helpers/genericHelper";
import { expenesVar } from "../variable/createExpenes.var copy";

export default class NewExpenesInit {
    static initNewExpenes(): CreateExpenesPayload {
        let createExpenesPayload: CreateExpenesPayload = {
            expenes: {
                name: expenesVar.expenesname,
                description: ' ',
                status: true
            }
        }
        return createExpenesPayload
    }
}