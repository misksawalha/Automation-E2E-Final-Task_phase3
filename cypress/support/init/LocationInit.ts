import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";
export let address = `Asira`
export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: address,
                city: "",
                countryCode: "PS",
                fax: "",
                name: address,
                note: "",
                phone: "",
                province: "",
                zipCode: ""
            }
        }
        return createLocationPayload
    }
}