import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { UserModel } from 'src/app/model/user-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.scss'],
  providers: [MessageService]
})
export class UserQueryComponent implements OnInit {

  title: string = "Usuarios";
  list: UserModel[] = [];
  showPnlEdit: boolean = false;
  selectedUser: any;
  selectedPhase: string | undefined;

  // Common
  msg: any;

  constructor(private router: Router, private textProperties: TextProperties, private enums: Enumerados, private rest: RestService, public util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedUser = this.omi.initializerUserModel();
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.showPnlEdit = true;
  }

  toEdit(user: UserModel) {
    this.messageService.clear();
    this.selectedUser = user;
    this.selectedUser.password = "";
    this.selectedPhase = environment.phaseEdit;
    localStorage.setItem("phase", environment.phaseEdit);
    this.showPnlEdit = true;
  }

  find() {
    try {
      this.rest.getREST(environment.urlUsers).subscribe({
        next: (res: any) => {
          console.log(res);
          this.list = res.data;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  save(event: any) {
    this.messageService.add(event);
    this.find();
    this.showPnlEdit = false;
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

}