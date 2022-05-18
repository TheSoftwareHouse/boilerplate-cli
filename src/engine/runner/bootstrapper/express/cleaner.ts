import { removeDependencies } from "../../shared/npm";

interface CleanerDependencies {
  dirname: string;
  packageNames: string[];
}

export class Cleaner {
  private dirname: string;

  private packageNames: string[];

  constructor({ dirname, packageNames }: CleanerDependencies) {
    this.dirname = dirname;
    this.packageNames = packageNames;
  }

  cleanUp() {
    removeDependencies(this.dirname, this.packageNames);
  }
}
