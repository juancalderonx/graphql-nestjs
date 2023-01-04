import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'Todo quick aggregations' })
export class AggregationsType {

  @Field( () => Int )
  total: number;

  @Field( () => Int )
  completed: number;

  @Field( () => Int )
  pending: number;

  @Field( () => Int, { deprecationReason: 'Ya no se usa porque tenemos su opción llamada totalTodos' } )
  totalTodoCompleted: number;

}