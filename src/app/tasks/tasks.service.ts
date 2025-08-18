import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
     private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Drink Milk',
          summary: 'Drink as much milk as I possibly can every day until october.',
          dueDate: '10-20-2025'
        },
         {
          id: 't2',
          userId: 'u1',
          title: 'Destroy Couch',
          summary: 'Ignore all the toys my mom buys for me and use the couch to sharpen my claws.',
          dueDate: '12-25-2025'
        },
         {
          id: 't3',
          userId: 'u3',
          title: 'Swim and Relax',
          summary: "Swim holding hands with my best friend so we don't get separated.'",
          dueDate: '09-03-2025'
        },
        {
          id: 't4',
          userId: 'u6',
          title: 'Make Noise',
          summary: "Get on the roof of a random house and make noise until the owners wake up thinking they're being robbed.",
          dueDate: '09-06-25'
        }
      ];

      constructor(){
        const tasks = localStorage.getItem('tasks') 

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(selectedUserId: string){
        return this.tasks.filter((task) => task.userId=== selectedUserId);
      }

      addTask(taskData: NewTaskData, selectedUserId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: selectedUserId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
         });
         this.saveTasks();     
      }

      removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    
}