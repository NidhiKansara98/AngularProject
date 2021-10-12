import { FormBuilder, FormGroup } from "@angular/forms";
import { Employees } from "./employee";

export class FolderFormController {
    public iconfolder = 'folderform';
    constructor(private formbuilder: FormBuilder) { }

    //create form group for add model
    createFormGroup(): FormGroup {
        return this.formbuilder.group({
            id: [0],
            first_name: [''],
            last_name: [''],
            email: [''],
        })
    }

    //TO save data to database
    buildSaveData(dFormGroup: FormGroup){
        let dform:Employees = {} as Employees;
        dform.id = dFormGroup.value.id;
        dform.first_name = dFormGroup.value.first_name;
        dform.last_name = dFormGroup.value.last_name;
        dform.email = dFormGroup.value.email;
    }
}