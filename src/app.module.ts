import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose'; 

import { ClientsModule } from './clients/clients.module';
  
@Module({
  imports: [
    ClientsModule,
    MongooseModule.forRoot('mongodb://localhost:27018/nest-crm-clients')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
