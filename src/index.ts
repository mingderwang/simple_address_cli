import { Command } from "commander";
import address from "./address";

const program = new Command();

program
  .name("ERC-4337 SimpleAccount")
  .description(
    "A collection of example scripts for working with ERC-4337 SimpleAccount.sol"
  )
  .version("0.0.1");

program
  .command("address")
  .description("Generate a counterfactual address.")
  .option("-n, --name <name>", "Specify your name")
  .option("-a, --age <age>", "Specify your age")
  .action(address);

program.parse(process.argv);
