import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';


@Resolver()
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @Query( () => [Todo], { name: 'allTodos' } )
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query( () => Todo, { name: 'oneTodo', description: 'Return one todo by ID' } )
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

}
