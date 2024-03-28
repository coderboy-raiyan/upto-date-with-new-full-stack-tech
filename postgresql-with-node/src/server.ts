import http from "http";
import app from "./app/app";
import config from "./config";

const server = http.createServer(app);

function bootstrap() {
  try {
    server.listen(config.PORT, () => {
      console.log("Listening to PORT ", config.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
