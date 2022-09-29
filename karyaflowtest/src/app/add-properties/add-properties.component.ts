import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { workflowservice } from '../KaryaFlowServices';

@Component({
  selector: 'app-add-properties',
  templateUrl: './add-properties.component.html',
  styleUrls: ['./add-properties.component.scss']
})
export class AddPropertiesComponent implements OnInit {
  addPropertiesForm: FormGroup;
  newProperty: any;

  constructor(private formBuilder: FormBuilder, private workflowservice: workflowservice) {
    this.addPropertiesForm = this.formBuilder.group({
      propertyName:'',
      propertyType : '',
      label : '',
      hint : '',
      options : ''
      });
  }

  ngOnInit(): void {
  }

  AddProperty()
  {
    this.newProperty = this.addPropertiesForm.value
    this.workflowservice.writeProperty(this.newProperty).subscribe(
      result => {
        var a = result;

      }
    
    )
  }
}
