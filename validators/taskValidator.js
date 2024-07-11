import { check} from "express-validator";
import taskHelperValidator from "../helpers/taskHelperValidator.js";

const taskDataValidator = [
    check("taskName")
    .exists()
    .notEmpty()
    .trim()
    .isString(),
    check("taskDescription")
    .exists()
    .notEmpty()
    .isString(),
    check("startDate")
    .exists()
    .notEmpty()
    .isDate(),
    check("endDate")
    .exists()
    .notEmpty()
    .isDate(),
    check("responsiblePersonEmail")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next)=>{
        taskHelperValidator(req, res, next)
    }
]


export default taskDataValidator