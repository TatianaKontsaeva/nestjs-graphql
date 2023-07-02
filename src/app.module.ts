import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
        playground: true,
        autoSchemaFile: true,
    }), TasksModule, CommentsModule, UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
