import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component"
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ="Essentials";
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}

  onSelectUser(id: string){
    this.selectedUserId = id;
  }


}
