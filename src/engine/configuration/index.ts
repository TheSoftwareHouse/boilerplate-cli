export interface Configuration {
  name: string;
  project: ProjectType;
  dirname: string;
  modules: ExpressModule[];
}

export enum ProjectType {
  Express = "express",
  Serverless = "serverless",
}

export enum ExpressModule {
  Redis = "redis",
}
