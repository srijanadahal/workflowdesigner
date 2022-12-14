import { Component, Element, h, Event, EventEmitter, Prop} from '@stencil/core';
import { Activity, ActivityDefinition, ActivityDisplayMode } from "../../../models";

@Component({
  tag: 'wf-activity-editor',
  styleUrl: 'activity-editor.scss',
  shadow: false
})
export class ActivityEditor {

  @Element()
  el: HTMLElement;

  @Prop()
  activityDefinitions: Array<ActivityDefinition> = [];

  @Prop()
  activity: Activity;

  @Prop({ mutable: true })
  show: boolean;

  @Event({ eventName: 'update_activity' })
  submit: EventEmitter;

  modal: HTMLElement;
  renderer: HTMLWfActivityRendererElement;

  async onSubmit(e: Event) {
    e.preventDefault();

    const form: any = e.target;
    const formData = new FormData(form);
    const updatedActivity = await this.renderer.updateEditor(formData);
    this.submit.emit(updatedActivity);
    this.show = false;
  }

  componentDidRender(){
    const modal = $(this.el.querySelector('.modal'));
    const action = this.show ? 'show' : 'hide';
    modal.modal(action);
  }

  render() {
    const activity = this.activity;

    if (!activity) {
      return null;
    }

    const activityDefinition = this.activityDefinitions.find(x => x.type == activity.type);

    if (!activityDefinition) {
      console.error(`No activity of type ${ this.activity.type } exists in the library.`);
      return;
    }

    const displayName = activityDefinition.displayName;

    return (
      <div>
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <form onSubmit={ e => this.onSubmit(e) }>
                <div class="modal-header">
                  <h5 class="modal-title">Edit { displayName }</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <wf-activity-renderer activity={ activity } activityDefinition={ activityDefinition } displayMode={ ActivityDisplayMode.Edit }  ref={x => this.renderer = x} />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // private static parseHandlebars(source: string, activity: Activity): string {
  //   const template = Handlebars.compile(source);
  //   return template({...activity.state, activity});
  // }
}
