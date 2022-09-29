import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { activity, workflow, WorkflowModel } from "./Workflow.model";
import { Observable } from "rxjs";
import { PropertyModel } from "./Models/properties.model";
// import {writeJsonFile} from 'write-json-file';

@Injectable({
    providedIn: "root"
})
export class workflowservice{
    workflow: any;
    activity: any;
    httpClient: any;
    apiUrl: any;
    retunmessage : any;
    httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        },),
      };
    data: any;

    constructor(private http: HttpClient){}

    getWorkFlow(){
        return this.http.get<workflow>("/assets/workflow.json")
    }

    getActivities(){
        this.apiUrl = "http://localhost:53389/api/Activity/";
        //return this.http.get<activity>("/assets/activities.json")
        return this.http.get<any>(this.apiUrl ,this.httpOptions).pipe();

    }

    writeactivities(jsonactivity: string): Observable<any> {
        console.log(jsonactivity);
        this.apiUrl = "http://localhost:53389/api/Activity/";
        this.http.post<any>(this.apiUrl ,jsonactivity.toString(),this.httpOptions).subscribe(
            result => {
                this.retunmessage = result;
            }
        );
        return this.retunmessage;
    }

    writeProperty(property: PropertyModel): Observable<any> {
        console.log(property);
        this.apiUrl = "http://localhost:53389/api/Property";
        this.http.post<any>(this.apiUrl ,property,this.httpOptions).subscribe(
            result => {
                this.retunmessage = result;
            }
        );
        return this.retunmessage;
    }

    getProperty()
    {
        this.apiUrl = "http://localhost:53389/api/Property";
        return this.http.get(this.apiUrl ,this.httpOptions)
    }

}