import { unlinkSync } from "fs";
import { join } from "path";
import * as rimraf from "rimraf";
import { FileParser } from "./file.parser";

export class ResourceExtractor {
  constructor(private dirname: string) {}

  public removeFiles(paths: string[]) {
    paths.forEach((path) => unlinkSync(join(this.dirname, path)));
  }

  public removeDirs(paths: string[]) {
    paths.forEach((path) => rimraf.sync(join(this.dirname, path)));
  }

  public removeLines(key: string, paths: string[]) {
    paths.forEach((path) => {
      new FileParser(join(this.dirname, path)).removeLinesIncludingKey(key);
    });
  }
}
