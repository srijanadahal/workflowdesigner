/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@karyaflow-designer/dist/types';




export declare interface WfActivityEditor extends Components.WfActivityEditor {
  /**
   *  
   */
  update_activity: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activity', 'activityDefinitions', 'show']
})
@Component({
  selector: 'wf-activity-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activity', 'activityDefinitions', 'show']
})
export class WfActivityEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update_activity']);
  }
}


export declare interface WfActivityPicker extends Components.WfActivityPicker {
  /**
   *  
   */
  activity_picked: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activityDefinitions'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'wf-activity-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activityDefinitions']
})
export class WfActivityPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activity_picked']);
  }
}


export declare interface WfActivityRenderer extends Components.WfActivityRenderer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activity', 'activityDefinition', 'displayMode'],
  methods: ['updateEditor']
})
@Component({
  selector: 'wf-activity-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activity', 'activityDefinition', 'displayMode']
})
export class WfActivityRenderer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WfBooleanField extends Components.WfBooleanField {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'hint', 'label', 'name']
})
@Component({
  selector: 'wf-boolean-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'hint', 'label', 'name']
})
export class WfBooleanField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WfContextMenu extends Components.WfContextMenu {
  /**
   *  
   */
  context_menu: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['target', 'targetSelector'],
  methods: ['handleContextMenuEvent']
})
@Component({
  selector: 'wf-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['target', 'targetSelector']
})
export class WfContextMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['context_menu']);
  }
}


export declare interface WfContextMenuItem extends Components.WfContextMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text']
})
@Component({
  selector: 'wf-context-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text']
})
export class WfContextMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WfDesigner extends Components.WfDesigner {
  /**
   *  
   */
  edit_activity: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  add_activity: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  workflowChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activityDefinitions', 'canvasHeight', 'readonly', 'workflow'],
  methods: ['newWorkflow', 'getWorkflow', 'addActivity', 'updateActivity']
})
@Component({
  selector: 'wf-designer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activityDefinitions', 'canvasHeight', 'readonly', 'workflow']
})
export class WfDesigner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['edit_activity', 'add_activity', 'workflowChanged']);
  }
}


export declare interface WfDesignerHost extends Components.WfDesignerHost {
  /**
   *  
   */
  workflowChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activityDefinitionsData', 'canvasHeight', 'pluginsData', 'readonly', 'workflow', 'workflowData'],
  methods: ['newWorkflow', 'getWorkflow', 'showActivityPicker', 'export', 'import']
})
@Component({
  selector: 'wf-designer-host',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activityDefinitionsData', 'canvasHeight', 'pluginsData', 'readonly', 'workflow', 'workflowData']
})
export class WfDesignerHost {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['workflowChanged']);
  }
}


export declare interface WfExportButton extends Components.WfExportButton {
  /**
   *  
   */
  export: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['designerHostId', 'workflowFormats']
})
@Component({
  selector: 'wf-export-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['designerHostId', 'workflowFormats']
})
export class WfExportButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['export']);
  }
}


export declare interface WfExpressionField extends Components.WfExpressionField {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hint', 'label', 'multiline', 'name', 'syntax', 'value']
})
@Component({
  selector: 'wf-expression-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'label', 'multiline', 'name', 'syntax', 'value']
})
export class WfExpressionField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { Workflow as IImportExportWorkflow } from '@karyaflow-designer/dist/types';
export declare interface WfImportExport extends Components.WfImportExport {
  /**
   *  
   */
  import_workflow: EventEmitter<CustomEvent<IImportExportWorkflow>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['export', 'import']
})
@Component({
  selector: 'wf-import-export',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class WfImportExport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['import_workflow']);
  }
}


export declare interface WfListField extends Components.WfListField {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hint', 'items', 'label', 'name']
})
@Component({
  selector: 'wf-list-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'items', 'label', 'name']
})
export class WfListField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WfSelectField extends Components.WfSelectField {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hint', 'items', 'label', 'name', 'value']
})
@Component({
  selector: 'wf-select-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'items', 'label', 'name', 'value']
})
export class WfSelectField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WfTextField extends Components.WfTextField {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hint', 'label', 'name', 'value']
})
@Component({
  selector: 'wf-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'label', 'name', 'value']
})
export class WfTextField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
