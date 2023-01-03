import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { name: 'FunctionTest', description: 'This is a test function that returns Hello World' } )
    hello(): string {
        return 'Hello World';
    }

    @Query( () => Float )
    numberRandom(): number {
        return Math.random() * 100;
    }

    @Query( () => Int, { description: 'Random number from 0 to argument "to" (default 6)' } )
    getRandomFromZeroTo( @Args('to', { type: () => Int, nullable: true }) to: number = 6 ): number {
        return Math.round(Math.random() * to);
    }

}
