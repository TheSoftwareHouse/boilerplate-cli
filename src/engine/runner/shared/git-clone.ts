import { resolve } from "path";
import { execSync } from "child_process";

interface GitCloneParameters {
  url: string;
  name: string;
  dirname: string;
}

export const gitClone = ({ url, name, dirname }: GitCloneParameters) =>
  execSync(`git clone ${url} ${name}`, {
    stdio: [0, 1, 2], // we need this so node will print the command output
    cwd: resolve(dirname, ""), // path to where you want to save the file}
  });
