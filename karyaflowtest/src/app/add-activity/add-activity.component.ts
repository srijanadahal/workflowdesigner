import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { workflowservice } from '../KaryaFlowServices';
import { PropertyModel } from '../Models/properties.model';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit 
{
  activityDefinitions  : any;
  addActivityForm: FormGroup;
  outcomesList: any;
  newActivity: any;
  activityList: any;
  testdata: any;
  PropertyList: any;
  categoryList: any;
  outcomes: any;
  properties: any;
  

  constructor(private formBuilder: FormBuilder, private workflowservice: workflowservice) 
  { 
    
    this.addActivityForm = this.formBuilder.group({
    activitytype:'',
    displayName :'',
    description :'',
    runtimeDescription :'',
    category :'',
    icon :'',
    outcomes :'',
    properties: ''
    });

  }

  

  ngOnInit(): void 
  {
    this.workflowservice.getActivities().subscribe(
      result => {
        this.activityDefinitions = JSON.stringify(result);
        this.activityList = result;
      }
    )

    this.workflowservice.getProperty().subscribe(
      result => {
        this.PropertyList = result;
      }
    )


     this.outcomesList = [
      {
        value: "1",
        name: "Done"
      },
      {
        value: "2",
        name: "Iterate"
      },
      {
        value: "2",
        name: "Repeat"
      }
    ];

    this.categoryList = [
      {
        "id": "1",
        "name": "Console"
      },
      {
        "id": "2",
        "name": "Control Flow"
      },
      {
        "id": "3",
        "name": "Email"
      },
      {
        "id": "4",
        "name": "HTTP"
      },
      {
        "id": "5",
        "name": "User Tasks"
      }
    ];

  }
  AddActivity()
  {
    console.log(this.activityList);
    this.activityList = this.activityList;
    this.newActivity = this.addActivityForm.value
    // this.activityList = this.activityList.concat(this.newActivity);
    var jsonactivity = JSON.stringify(this.newActivity);
    
    this.workflowservice.writeactivities(jsonactivity).subscribe(
      result => {
        var a = result;
        // var a = document.createElement("a");
        // document.body.appendChild(a);
        // //a.style = "display: none";
        // var fileName = "activities.json";
        
        //     var json = jsonactivity,
        //         blob = new Blob([json], {type: "octet/stream"}),
        //         url = window.URL.createObjectURL(blob);
        //     a.href = url;
        //     a.download = fileName;
        //     //a.click();
        //     window.URL.revokeObjectURL(url);
        // //this.activityDefinitions = JSON.stringify(result.activity);
        // //this.activityList = result.activity;
        // console.log(this.activityDefinitions);
      }
    
    )
  }

}

