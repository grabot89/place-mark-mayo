import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testCategories, testPlacemarks, beaches, museums, museum, testUsers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Placemark Model tests", () => {

  let beachList = null;

  setup(async () => {
    db.init("json");
    await db.categoryStore.deleteAllCategories();
    await db.placemarkStore.deleteAllPlacemarks();
    beachList = await db.categoryStore.addCategory(beaches);
    for (let i = 0; i < testPlacemarks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPlacemarks[i] = await db.placemarkStore.addPlacemark(beachList._id, testPlacemarks[i]);
    }
  });

  test("create single placemark", async () => {
    const museumsList = await db.categoryStore.addCategory(museum);
    const placemark = await db.placemarkStore.addPlacemark(museumsList._id, museum)
    assert.isNotNull(placemark._id);
    assertSubset (museum, placemark);
  });

  test("create multiple placemarkApi", async () => {
    const placemarks = await db.categoryStore.getCategoryById(beachList._id);
    assert.equal(testPlacemarks.length, testPlacemarks.length)
  });

  test("delete all placemarkApi", async () => {
    const placemarks = await db.placemarkStore.getAllPlacemarks();
    assert.equal(testPlacemarks.length, placemarks.length);
    await db.placemarkStore.deleteAllPlacemarks();
    const newPlacemarks = await db.placemarkStore.getAllPlacemarks();
    assert.equal(0, newPlacemarks.length);
  });

  test("get a placemark - success", async () => {
    const museumsList = await db.categoryStore.addCategory(museums);
    const placemark = await db.placemarkStore.addPlacemark(museumsList._id, museum)
    const newPlacemark = await db.placemarkStore.getPlacemarkById(placemark._id);
    assertSubset (museum, newPlacemark);
  });

  test("delete One Placemark - success", async () => {
    const id = testPlacemarks[0]._id;
    await db.placemarkStore.deletePlacemark(id);
    const placemarks = await db.placemarkStore.getAllPlacemarks();
    assert.equal(placemarks.length, testCategories.length - 1);
    const deletedPlacemark = await db.placemarkStore.getPlacemarkById(id);
    assert.isNull(deletedPlacemark);
  });

  test("get a category - bad params", async () => {
    assert.isNull(await db.placemarkStore.getPlacemarkById(""));
    assert.isNull(await db.placemarkStore.getPlacemarkById());
  });

  test("delete One User - fail", async () => {
    await db.placemarkStore.deletePlacemark("bad-id");
    const placemarks = await db.placemarkStore.getAllPlacemarks();
    assert.equal(placemarks.length, testCategories.length);
  });
});
