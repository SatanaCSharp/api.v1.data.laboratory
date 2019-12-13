import { Schema } from 'mongoose';
export const fidSchema = new Schema({
    email: String,
    localRealityId: Number,
    realityType: String,
    state: String,
    city: String,
    totalArea: Number,
    floor: Number,
    floors: Number,
    price: Number,
    priceType: String,
    wallType: String,
    roomsCount: String,
});
