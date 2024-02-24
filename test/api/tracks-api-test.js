import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, mozart, testPlaylists, testTracks, concerto } from "../fixtures.js";

suite("Track API tests", () => {
  let user = null;
  let beethovenSonatas = null;

  setup(async () => {
    db.init("json");
  });

  teardown(async () => {});

  test("create track", async () => {
  });

  test("create Multiple trackApi", async () => {
  });

  test("Delete Track", async () => {
  });

  test("test denormalised playlist", async () => {
  });
});
