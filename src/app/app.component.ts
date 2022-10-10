import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JSONEditor } from '@json-editor/json-editor';
import { getCurrentValue1, getCurrentValue2, getJsonSchema } from './support-functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('jsonEditor', { read: ElementRef }) private jsonEditorElem?: ElementRef<HTMLElement>;
  private jsonEditor: JSONEditor = null;

  public ngAfterViewInit(): void {
    // See documentation and examples @ https://github.com/json-editor/json-editor
    this.jsonEditor = new JSONEditor(this.jsonEditorElem?.nativeElement, {
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
      show_errors: 'interaction',
      schema: getJsonSchema(),
    });

    this.jsonEditor.on('ready', () => {
      this.jsonEditor.enable();

      const currentValue = getCurrentValue2();
      if (currentValue) {
        this.jsonEditor.setValue(currentValue);
        this.validateAndShow();
      }
    });
  }

  public onSubmit(): void {
    if (!this.validateAndShow()) {
      return;
    }

    const jsonObject = this.jsonEditor.getValue();
    const jsonString = JSON.stringify(jsonObject, null, 2);
    alert(jsonString);
  }

  private validateAndShow(): boolean {
    const errors = this.jsonEditor.validate();
    if (errors?.length) {
      this.jsonEditor.setOption('show_errors', 'always');
      return false;
    }
    return true;
  }
}
