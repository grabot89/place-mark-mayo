import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, mozart, testCategories, testPlacemarks, concerto } from "../fixtures.js";

suite("Placemark API tests", () => {
  let user = null;
  let beethovenSonatas = null;

  setup(async () => {
    db.init("json");
  });

  teardown(async () => {});

  test("create placemark", async () => {
  });

  test("create Multiple placemarkApi", async () => {
  });

  test("Delete Placemark", async () => {
  });

  test("test denormalised category", async () => {
  });
});
