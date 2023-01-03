import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @Mutation( () => Todo )
  createTodo( @Args('todo') todo: CreateTodoInput ) {
    return this.todoService.createTodo(todo);
  }

  @Mutation( () => Todo )
  updateTodo( @Args('todo') todo: UpdateTodoInput ) {
    return this.todoService.updateTodo(todo);
  }

  @Query( () => [Todo], { name: 'allTodos' } )
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query( () => Todo, { name: 'oneTodo', description: 'Return one todo by ID' } )
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

}
