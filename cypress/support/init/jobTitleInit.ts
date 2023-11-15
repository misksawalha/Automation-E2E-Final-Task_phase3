import { CreateJobTitlePayload } from "../payload/jobTitlePayload"
import GenaricHelper from "../helpers/genericHelper";

export default class JobTitleInit {
    static initJobTitle(): CreateJobTitlePayload {
        let createJobTitlePayload: CreateJobTitlePayload = {
            JobTitle: {
                    title: `Node js`,
                    description: "",
                    specification: "",
                    note: ""
            }
        }
        return createJobTitlePayload
    }
}