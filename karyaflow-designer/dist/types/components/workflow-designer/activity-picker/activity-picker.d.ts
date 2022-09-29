import { EventEmitter } from '../../../stencil-public-runtime';
import { ActivityDefinition } from '../../../models';
export declare class ActivityPicker {
    el: HTMLElement;
    activityDefinitions: Array<ActivityDefinition>;
    isVisible: boolean;
    filterText: string;
    selectedCategory: string;
    show(): Promise<void>;
    hide(): Promise<void>;
    activitySelected: EventEmitter;
    modal: any;
    onActivitySelected(activity: ActivityDefinition): Promise<void>;
    private onFilterTextChanged;
    private selectCategory;
    render(): any;
    renderActivity: (activity: ActivityDefinition) => any;
}
