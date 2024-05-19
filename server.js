import app from "./index.js";
import { mongooseConnect } from "./src/config/mongoose.config.js";

app.listen(8000, () => {
  console.log("Server is listening at port 8000");
  mongooseConnect();
});
