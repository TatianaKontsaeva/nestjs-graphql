import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
