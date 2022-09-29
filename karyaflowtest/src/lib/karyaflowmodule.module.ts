import { NgModule } from "@angular/core";
import { defineCustomElements } from "@karyaflow-designer/loader";
import { WfDesignerHost, WfActivityPicker, WfContextMenuItem, WfDesigner, WfExportButton} from "./stencil-generated/proxies";


defineCustomElements(window)
@NgModule
({
imports: [],
exports: [WfDesignerHost, WfActivityPicker, WfContextMenuItem, WfDesigner, WfExportButton],
declarations: [WfDesignerHost, WfActivityPicker, WfContextMenuItem, WfDesigner, WfExportButton]
})
export class KaryaFlowModule{

}