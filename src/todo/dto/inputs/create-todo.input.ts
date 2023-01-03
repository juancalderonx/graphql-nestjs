import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreateTodoInput {

  @Field( { description: 'Header of TODO' } )
  @IsString() @IsNotEmpty() @MinLength(1) @MaxLength(80)
  title: string;

  @Field( { description: "What needs to be done?" } )
  @IsString() @IsNotEmpty() @MinLength(1) @MaxLength(200)
  description: string;
}