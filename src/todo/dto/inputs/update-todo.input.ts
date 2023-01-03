import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MaxLength, MinLength, Min, IsInt, IsOptional, IsBoolean } from "class-validator";

@InputType()
export class UpdateTodoInput {

  @Field( () => Int )
  @IsInt() @Min(1)
  id: number;

  @Field( { description: 'Header of TODO' , nullable: true } )
  @IsString() @IsNotEmpty() @MinLength(1) @MaxLength(80) @IsOptional()
  title?: string;

  @Field( { description: "What needs to be done?" , nullable: true } )
  @IsString() @IsNotEmpty() @MinLength(1) @MaxLength(200) @IsOptional()
  description?: string;

  @Field( { nullable: true } )
  @IsOptional() @IsBoolean()
  completed?: boolean;

}