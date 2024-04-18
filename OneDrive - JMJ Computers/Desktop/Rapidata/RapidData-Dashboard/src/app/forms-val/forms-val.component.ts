import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms-val',
  templateUrl: './forms-val.component.html',
  styleUrls: ['./forms-val.component.css']
})
export class FormsValComponent {
  employeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeForm = this.formBuilder.group({
      entityName: ['', Validators.required],
      legalRegistration: ['', [Validators.required,]],
      legalRegistrationNumber: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^[0-9]*$")],],

      entityHead: ['', [Validators.required,]],
      currency: ['', [Validators.required,]],
      country: ['', [Validators.required,]],

      state: ['', [Validators.required,]],
      month: ['', [Validators.required,]],
      startYear: ['', [Validators.required,]],

      lastDay: ['', [Validators.required,]],
      startingMonth: ['', [Validators.required,]],
      address: ['', [Validators.required, Validators.minLength(10)]],

      default: ['',],
      weekOffs: ['',],
      holidays: ['',],



    });
  }

  formInvalid: boolean = false;
  onSubmit() {
    if (this.employeForm.invalid) {
      this.formInvalid = true;
      return false;
    }
    alert("Form Submitted");
    // alert(this.employeForm.value);
    console.log("employeForm", this.employeForm.value);
    return true;
  }
  //getters for forms
  get entityName() { return this.employeForm.get('entityName'); }
  get legalRegistration() { return this.employeForm.get('legalRegistration'); }
  get legalRegistrationNumber() { return this.employeForm.get('legalRegistrationNumber'); }

  get entityHead() { return this.employeForm.get('entityHead'); }
  get currency() { return this.employeForm.get('currency'); }
  get country() { return this.employeForm.get('country'); }

  get state() { return this.employeForm.get('state'); }
  get month() { return this.employeForm.get('month'); }
  get startYear() { return this.employeForm.get('startYear'); }

  get lastDay() { return this.employeForm.get('lastDay'); }
  get startingMonth() { return this.employeForm.get('startingMonth'); }
  get address() { return this.employeForm.get('address'); }

  get default() { return this.employeForm.get('default'); }
  get weekOffs() { return this.employeForm.get('weekOffs'); }
  get holidays() { return this.employeForm.get('holidays'); }





}
