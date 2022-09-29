import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
export declare class ControlFlowActivities implements WorkflowPlugin {
    private static readonly Category;
    getName: () => string;
    getActivityDefinitions: () => Array<ActivityDefinition>;
    private fork;
    private ifElse;
    private join;
    private switch;
}
