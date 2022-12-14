import { WorkflowPlugin } from "../models";
export declare class WorkflowPluginStore {
    private plugins;
    add: (plugin: WorkflowPlugin) => void;
    list: () => Array<WorkflowPlugin>;
}
declare const pluginStore: WorkflowPluginStore;
export default pluginStore;
