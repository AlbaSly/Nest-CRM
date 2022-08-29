import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class Client {

    @Prop({

    })
    public readonly name: string;

    @Prop({
        unique: true,
        index: true
    })
    public readonly email: string;

    @Prop()
    public readonly company: string;

    @Prop({
        unique: true
    })
    public readonly phone: string;

    @Prop()
    public readonly notes: string;

    @Prop()
    public createdAt: number;

    @Prop()
    public updatedAt?: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);