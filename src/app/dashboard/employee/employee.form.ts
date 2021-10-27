import { FormBuilder, FormGroup } from "@angular/forms";
import { Employee } from "./employee";

export class EmployeeFormController {
    public iconfolder = 'folder';
    constructor(private formbuilder: FormBuilder) { }

    //create form group for add model
    createFormGroup(): FormGroup {
        return this.formbuilder.group({
            id: [''],
            first_name: [''],
            last_name: [''],
            email: [''],
        })
    }

    //TO get data from form and patch into formgroup
    buildSaveData(dFormGroup: FormGroup){
        let dform:Employee = {} as Employee;
        dform.id = dFormGroup.value.id;
        dform.first_name = dFormGroup.value.first_name;
        dform.last_name = dFormGroup.value.last_name;
        dform.email = dFormGroup.value.email;
        return dform;
    }
}