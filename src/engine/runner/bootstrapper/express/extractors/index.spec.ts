import { join } from "path";
import { RedisExtractor } from "./redis.extractor";
import { extractorsFactory } from ".";
import { ExpressModule } from "../../../../configuration";

describe.skip("Module extractors", () => {
  const path = join(__dirname, "../../../shared/tests");
  it("returns extractors based on modules in input", () => {
    const extractors = extractorsFactory(path, [ExpressModule.Redis]);

    expect(extractors.length).toEqual(1);
    expect(
      extractors.find((extractor) => extractor instanceof RedisExtractor)
    ).not.toBeUndefined();
  });

  it("returns nothing if modules array is empy", () => {
    const extractors = extractorsFactory(path, []);

    expect(extractors.length).toEqual(0);
  });
});
