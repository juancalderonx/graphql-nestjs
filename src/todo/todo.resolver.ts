import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { StatusArgs } from './dto/args';
import { Todo } from './entities/todo.entity';
import { AggregationsType } from './types/aggregation.type';

@Resolver( () => Todo )
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
    return this.todoService.updateTodo(todo.id, todo);
  }

  @Query( () => [Todo], { name: 'allTodos' } )
  findAll( @Args() statusArgs: StatusArgs ): Todo[] {
    return this.todoService.findAll(statusArgs);
  }

  @Query( () => Todo, { name: 'oneTodo', description: 'Return one todo by ID' } )
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Mutation( () => Boolean, { name: 'deleteTodoById'} )
  deleteOne( @Args('id', { type: () => Int }) id: number ): Boolean {
    return this.todoService.deleteOneById(id);
  }

  //* Aggregations

  @Query( () => Int, { name: 'totalTodos' } )
  totalTodos(): number {
    return this.todoService.totalTodos;
  }

  @Query( () => Int, { name: 'completedTodos' } )
  completedTodos(): number {
    return this.todoService.completedTodos;
  }

  @Query( () => Int, { name: 'pendingTodos' } )
  pendingTodos(): number {
    return this.todoService.pendingTodos;
  }

  //* Forma de hacer aggregation más general con una sola Query.

  @Query( () => AggregationsType, { name: 'todoAggregations' } )
  todoAggregations() {
    return {
      total: this.todoService.totalTodos,
      completed: this.todoService.completedTodos,
      pending: this.todoService.pendingTodos,
      totalTodoCompleted: this.todoService.totalTodos,
    }
  }

}
