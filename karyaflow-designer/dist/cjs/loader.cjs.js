'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dca4a942.js');
const patch = require('./patch-e9f4a696.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["wf-boolean-field.cjs",[[0,"wf-boolean-field",{"name":[513],"label":[513],"checked":[516],"hint":[513]}]]],["wf-expression-field.cjs",[[0,"wf-expression-field",{"name":[513],"label":[513],"hint":[513],"value":[513],"multiline":[516],"syntax":[1537]}]]],["wf-list-field.cjs",[[0,"wf-list-field",{"name":[1],"label":[1],"items":[1],"hint":[1]}]]],["wf-select-field.cjs",[[0,"wf-select-field",{"name":[1],"label":[1],"value":[1],"hint":[1],"items":[1040]}]]],["wf-text-field.cjs",[[0,"wf-text-field",{"name":[513],"label":[513],"value":[513],"hint":[513]}]]],["wf-activity-editor_9.cjs",[[0,"wf-designer-host",{"workflow":[16],"canvasHeight":[513,"canvas-height"],"activityDefinitionsData":[1,"data-activity-definitions"],"workflowData":[1,"data-workflow"],"readonly":[4],"pluginsData":[1,"plugins"],"activityDefinitions":[32],"newWorkflow":[64],"getWorkflow":[64],"showActivityPicker":[64],"export":[64],"import":[64]},[[0,"activity_picked","onActivityPicked"],[0,"edit_activity","onEditActivity"],[0,"add_activity","onAddActivity"],[0,"update_activity","onUpdateActivity"],[0,"export-workflow","onExportWorkflow"],[0,"import_workflow","onImportWorkflow"]]],[0,"wf-export-button",{"designerHostId":[1,"workflow-designer-host"],"workflowFormats":[16]}],[0,"wf-designer",{"canvasHeight":[513,"canvas-height"],"activityDefinitions":[16],"readonly":[516],"workflow":[1040],"newWorkflow":[64],"getWorkflow":[64],"addActivity":[64],"updateActivity":[64]}],[0,"wf-activity-editor",{"activityDefinitions":[16],"activity":[16],"show":[1028]}],[0,"wf-activity-picker",{"activityDefinitions":[16],"isVisible":[32],"filterText":[32],"selectedCategory":[32],"show":[64],"hide":[64]}],[0,"wf-import-export",{"export":[64],"import":[64]}],[4,"wf-context-menu",{"target":[16],"targetSelector":[513,"target"],"isHidden":[32],"position":[32],"handleContextMenuEvent":[64]},[[32,"click","handleBodyClick"],[32,"context_menu","handleContextMenu"]]],[0,"wf-context-menu-item",{"text":[520]}],[0,"wf-activity-renderer",{"activityDefinition":[16],"activity":[16],"displayMode":[1,"display-mode"],"updateEditor":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
