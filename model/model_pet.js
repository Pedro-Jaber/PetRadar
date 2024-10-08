const mongoose = require("mongoose");
const { Schema } = mongoose;

const PetSchema = new Schema(
  {
    name: String,
    latitude: [mongoose.Types.Decimal128],
    longitude: [mongoose.Types.Decimal128],
  },
  { timestamps: true, collection: "pets" }
);

module.exports = mongoose.model("Pet", PetSchema);
