import { App } from "./App";

{
  (async () => {
    try {
      const app = new App();

      await app.listen(+process.env.PORT!);
    } catch (error) {
      console.log(error);

      process.exit(1);
    }
  })();
}
