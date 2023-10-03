const { default: mongoose, model } = require("mongoose");

const connectToDB = async () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error("CONNECTION_STRING is not defined");
    // Normal exit
    // Abnormal exit
    // 0->Normal exit
    // 1->Abnormal, with errors, 1+ (starting from 1 and increasing, various numbers can be designated to represent different errors)

    process.exit(1);
    // No need to return since already exited
  }
  const db = mongoose.connection;
  //base on different case, can apply listening method "on"
  db.on("error",(error)=>{
    console.error(error)
    process.exit(2)
  })
  db.on("connected",()=>{
    console.log('DB connected')
  })
  db.on("disconnected",()=>{
    console.log('DB disconnected')
  })
  return await mongoose.connect(connectionString);
};

module.exports = connectToDB