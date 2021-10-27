import { FormBuilder, FormGroup } from "@angular/forms";
import { Product } from "./product";

export class ProductFormController {
    constructor(private formBuilder: FormBuilder) { }

    public createFormGroup(): FormGroup {
        return this.formBuilder.group({
            id: [''],
            prod_name: [''],
            prod_detail: [''],
            prod_img: ['']
        })
    }


    public buildSaveProduct(pformGroup:FormGroup){
        let pform:Product = {} as Product;
        pform.id = pformGroup.value.id;
        pform.prod_name = pformGroup.value.prod_name;
        pform.prod_detail = pformGroup.value.prod_detail;
        pform.prod_img = pformGroup.value.prod_img;
        return pform;
    }
}