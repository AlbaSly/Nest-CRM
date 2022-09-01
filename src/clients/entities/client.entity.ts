import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {

    @Prop()
    public readonly name: string;

    @Prop({
        unique: true,
        index: true
    })
    public readonly email: string;

    @Prop()
    public readonly company: string;

    @Prop()
    public readonly phone: string;

    @Prop()
    public readonly notes: string;

    @Prop()
    public createdAt: number;

    @Prop()
    public updatedAt?: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);