import mongoose from 'mongoose';
import { config } from 'dotenv';
import * as path from 'path';

//console.log(config({ path: path.resolve(__dirname, '../mongo-atlas.env') }));

config({ path: path.resolve(__dirname, '../mongo-atlas.env') });

export async function connectDb(): Promise<void> {
  try {
    console.log('process.env.MONGO_URI:');

    console.log(process.env.MONGO_URI);

    await mongoose.connect(`${process.env.MONGO_URI}`);
    const { host, name, port } = mongoose.connection;
    console.log('mongoose connection to atlas: ', { host, name, port });
  } catch (error) {
    console.log('mongoose connect Error: ', error);
  }
}
