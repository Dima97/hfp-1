import {Component, Input} from "@angular/core";
import {selector} from "rxjs/operator/publish";
import {Instruction} from "../../../model/Instruction";
import {User} from "../../../model/user";
import {AuthGuard} from "../../../service/guards/auth.guards";
import {ProjectService} from "../../../service/projectService";
import {Step} from "../../../model/Step";
import {Section} from "../../../model/Section";


@Component({
  selector: 'app-editor-step',
  templateUrl: './editorStep.component.html',
  styleUrls: ['./editorStep.component.css']
})

export class EditorStepComponent {
  protected project: Instruction = new Instruction;
  @Input() step: Step = new Step();
  user: User;
  tags: string[];
  position: number = 0;
  isDisabledButtonAdd: boolean = false;
  newStep: Step = new Step();
  currentTopic: Section = new Section();
  topics: Section[] = [new Section(1,'IT'), new Section(2,'Books')];

  constructor(private projectService: ProjectService,
              protected authGuard: AuthGuard) {
   // this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  addItem() {
    this.position++;
    console.log(this.position);
    this.isDisabledButtonAdd = this.changeStatus(this.isDisabledButtonAdd);
  }

  changeStatus(status: boolean) {
    return !status;
  }

  saveStep(step) {
    this.isDisabledButtonAdd = this.changeStatus(this.isDisabledButtonAdd);
    //this.steps.push(step);
    console.log(this.newStep)
    console.log(step)
    //this.newStep.clearStep();
  }

}
