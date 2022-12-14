import { Activity, ActivityPropertyDescriptor, RenderResult } from "../models";
import { FieldDriver } from "./field-driver";
export declare class DisplayManager {
    constructor();
    private readonly drivers;
    addDriver: (fieldType: string, driver: FieldDriver) => void;
    displayEditor: (activity: Activity, property: ActivityPropertyDescriptor) => RenderResult;
    updateEditor: (activity: Activity, property: ActivityPropertyDescriptor, formData: FormData) => void;
}
declare const _default: DisplayManager;
export default _default;
