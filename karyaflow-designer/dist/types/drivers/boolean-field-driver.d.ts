import { FieldDriver } from "../services/field-driver";
import { Activity, ActivityPropertyDescriptor, RenderResult } from "../models";
export declare class BooleanFieldDriver implements FieldDriver {
    displayEditor: (activity: Activity, property: ActivityPropertyDescriptor) => RenderResult;
    updateEditor: (activity: Activity, property: ActivityPropertyDescriptor, formData: FormData) => void;
}
