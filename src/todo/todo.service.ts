import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    { id: 1, title: 'Title 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Title 2', description: 'Description 2', completed: true },
    { id: 3, title: 'Title 3', description: 'Description 3', completed: true },
    { id: 4, title: 'Title 4', description: 'Description 4', completed: true },
    { id: 5, title: 'Title 5', description: 'Description 5', completed: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find(todo => todo.id === id);

    if(!todo) throw new NotFoundException(`Todo with id ${id} not found`);

    return todo;
  }

}
