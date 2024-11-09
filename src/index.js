import { app } from "./application/app.js";
import { env } from "./utils/env.js";

const PORT = env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
