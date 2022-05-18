import { Command } from "commander";
import { initCommand } from "./commands/init";
const { version } = require("../../package.json");
const program = new Command();

program.name("boilerplate-cli").version(version);

program
  .command("init")
  .description("Initialize boilerplate project")
  .action(async () => {
    await initCommand();
  });

export { program };
