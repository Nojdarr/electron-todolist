import { Injectable } from '@nestjs/common';
import { TaskModel } from './tasks.model';

@Injectable()
export class TasksService {
  _tasks: TaskModel[] = [
    { id: 1, description: 'Drink coffee', is_complete: false },
    { id: 2, description: 'Eat lunch', is_complete: false },
    { id: 3, description: 'Do some coding', is_complete: false },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }

  findTaskById(id: number): TaskModel | undefined {
    return this._tasks.find((t) => t.id == id);
  }
}
