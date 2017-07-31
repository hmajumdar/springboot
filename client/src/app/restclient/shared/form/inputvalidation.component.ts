import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Message, SelectItem} from 'primeng/components/common/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html'
})
export class InputValidationComponent implements OnInit {

  msgs: Message[] = [];

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  intervalId: any = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({label: 'Select Gender', value: ''});
    this.genders.push({label: 'Male', value: 'Male'});
    this.genders.push({label: 'Female', value: 'Female'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    // this.router.navigate(['/google']);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
    this.intervalId = setInterval(() => {
      window.location.href = 'https://stackoverflow.com';
    }, 2000);

  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
