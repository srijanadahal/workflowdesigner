import { Component, EventEmitter, HostListener, OnInit, Optional, Output, ViewChild,Input } from '@angular/core';
import { WfActivityPicker, WfDesigner, WfDesignerHost, WfExportButton, WfActivityRenderer } from 'src/lib/stencil-generated/proxies';
import { workflowservice } from './KaryaFlowServices';
import { MatDialog } from '@angular/material/dialog';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivityDefinition, WorkflowFormatDescriptor } from '@karyaflow-designer/dist/types/models';
import { AddPropertiesComponent } from './add-properties/add-properties.component';
import { proxyOutputs } from 'src/lib/stencil-generated/angular-component-lib/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'karyaflowtest';
  activityDefinition = "{}";
  workflowModel = "{}";
   @ViewChild('designerHost') designerHost?: WfDesignerHost;
   //@ViewChild('designer') designer?: WfDesigner;
   @ViewChild(WfDesigner) designer? : WfExportButton;
   @ViewChild(WfExportButton) exportbutton? : WfExportButton;
   @ViewChild(WfActivityPicker) activityPicker? : WfExportButton;
   @Output() parentComponentFunction : EventEmitter<any> = new EventEmitter();
  //  @ViewChild('activitypicker') activitypicker?: WfActivityPicker;
  //  @ViewChild('#activityrenderer') activityrenderer?: WfActivityRenderer;
  activityList: any;
  jsondatatosave: any;
  dataAvailable: boolean | undefined;
  workflowupdated: any | undefined;
  activity2 : any;

  constructor(private workflowservice: workflowservice, private matDialog: MatDialog){}

  // @HostListener("activity_picked", ['$event.detail'])
  // activityPickedEventHandler(event: CustomEvent<ActivityDefinition>) {
  //   debugger;
  //   console.log(event);
  // }

  ngOnInit(): void {
    var test = this.designerHost?.workflowData;
    
    this.workflowservice.getWorkFlow().subscribe(
      result => {
        this.workflowModel = JSON.stringify(result.workflow);
        this.dataAvailable = true;
      }
    )

 
    this.workflowservice.getActivities().subscribe(
      result => {
        this.activityDefinition = JSON.stringify(result.activity);
        this.activityList = result.activity;
      }
    )
  }

  showactivitypicker()
  {
    this.designerHost?.showActivityPicker()
  }

  importWorkflow()
  {
    debugger
    this.designerHost?.import();
  }

  async exportWorkflow()
  {
    debugger;
    this.workflowupdated = await this.designerHost?.getWorkflow();
    var test = JSON.stringify(this.workflowupdated);
    var a = document.createElement("a");
        document.body.appendChild(a);
        //a.style = "display: none";
        var fileName = "activities.json";
        
            var json = test,
                blob = new Blob([json], {type: "octet/stream"}),
                url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
    test = test;
  }

  async addtoworkflow(e:Event, activity: ActivityDefinition)
  {
     debugger
    //this.parentComponentFunction.emit(new Event('activity_picked'))
    //this.designer?.
    //  async (e: { preventDefault: () => void; }) => {
    //   e.preventDefault();
    //   await this.designerHost?.onActivitySelected(activity)
       //target.dispatchEvent(new Event('activity_picked', { bubbles: true , detail: activity}));
    // this.designer?.addActivity(activity);
    // this.workflowupdated = await this.designer?.workflow;
    // debugger
    // var test = this.activity2;
    //this.activitypicker?.activity_picked; EventEmitter<CustomEvent<any>>
  }

  newWorkFlow()
  {
    this.designerHost?.newWorkflow();
  }

  openActivityModel() {
    this.matDialog.open(AddActivityComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": "John",
      "autoFocus": false
    });
  }

  openPropertyModel() {
    this.matDialog.open(AddPropertiesComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": "John",
      "autoFocus": false
    });
  
  }
  
}


