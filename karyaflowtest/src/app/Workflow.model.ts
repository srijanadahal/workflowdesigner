// import { WorkflowFormat } from "@karyaflow-designer/dist/types/models"

export interface WorkflowModel {
    workflow: string,
    activity: string
}

export interface workflow {
    workflow: string
}

export interface activity {
    activity: string
}

// export interface WorkflowFormatDescriptor{
//     format: WorkflowFormat | 'json'
//     fileExtension: string | 'js'
//     mimeType: string | 'text/javascript'
//     displayName: string | 'workflow'
// }
