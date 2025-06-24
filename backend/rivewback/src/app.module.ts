import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Review } from './rivew/entities/rivew.entity';
import { RivewModule } from './rivew/rivew.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'final',
      synchronize: true,
      entities: [Review],
    }),
    RivewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
