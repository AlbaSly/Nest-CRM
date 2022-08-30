import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  
  public constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<Client>
  ) {}

  async create(createClientDto: CreateClientDto) {
    
    try {
      const clientCreated = await this.clientModel.create({
        ...createClientDto,
        createdAt: new Date()
      });

      return {
        msg: 'Client created',
        clientCreated
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    const clients: Client[] = await this.clientModel.find({}).select('-__v');

    return clients;
  }

  async findOne(id: string) {
    const clientFound: Client = await this.clientModel.findById(id);

    if (clientFound) throw new NotFoundException(`Client with id ${id} not found`);

    return clientFound;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: number) {
    return `This action removes a #${id} client`;
  }

  private handleExceptions(error: any): void {
    if (error.code == 11000) {
      throw new BadRequestException(`Client exists in db ${ JSON.stringify( error.keyValue ) }`);
    }

    console.log(error);
    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
  }
}
