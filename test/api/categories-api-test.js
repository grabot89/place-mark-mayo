import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";

import { maggie, mozart, testCategories } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Category API tests", () => {
  let user = null;

  setup(async () => {
    db.init("json");
    await placemarkService.deleteAllCategories();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    mozart.userid = user._id;
  });

  teardown(async () => {});

  test("create category", async () => {
    const returnedCategory = await placemarkService.createCategory(mozart);
    assert.isNotNull(returnedCategory);
    assertSubset(mozart, returnedCategory);
  });

  test("delete a category", async () => {
    const category = await placemarkService.createCategory(mozart);
    const response = await placemarkService.deleteCategory(category._id);
    assert.equal(response.status, 204);
    try {
      const returnedCategory = await placemarkService.getCategory(category.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });

  test("create multiple categories", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      testCategories[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createCategory(testCategories[i]);
    }
    let returnedCategories = await placemarkService.getAllCategories();
    assert.equal(returnedCategories.length, testCategories.length);
    await placemarkService.deleteAllCategories();
    returnedCategories = await placemarkService.getAllCategories();
    assert.equal(returnedCategories.length, 0);
  });

  test("remove non-existant category", async () => {
    try {
      const response = await placemarkService.deleteCategory("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });
});
