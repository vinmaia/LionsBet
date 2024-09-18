import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://maiav:kSckXefOO0ZiO5AS@Cluster0.ctfts.mongodb.net/";
const database = "lionsbet";

const main = async () => {
  try {
    await mongoose.connect(mongoDB + database);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;
