
import { CreateVacancyPayload } from "../payload/createVacancyPayload";
import { vacancyVar } from "../variable/createVacancy.var";
import { jobTitleId } from "../../support/helpers/jobTitleHelper";

export default class CreateVacancyInit {
    static initCreateVacancy(empID:Number): CreateVacancyPayload {
        let createCreateVacancyPayload: CreateVacancyPayload = {
            Vacancy: {
                name: vacancyVar.vacancyname,
                jobTitleId: jobTitleId,
                employeeId: empID,
                numOfPositions: null,
                description: "",
                status: true,
                isPublished: true
            }
        }
        return createCreateVacancyPayload
    }
}