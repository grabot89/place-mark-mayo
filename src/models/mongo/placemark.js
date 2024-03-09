import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  name: String,
  category: String,
  description: String,
  image: String,
  latitude: Number,
  longitude: Number,
  temperature: Number,
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);
