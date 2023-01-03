import { Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, {
        name: 'FunctionTest',
        description: 'This is a test function that returns Hello World'
    } )
    hello(): string {
        return 'Hello World';
    }

    @Query( () => Float )
    numberRandom(): number {
        return Math.random() * 100;
    }

    @Query( () => Int )
    getRandomFromZeroTo(): number {
        return Math.round(Math.random() * 10);
    }

}
