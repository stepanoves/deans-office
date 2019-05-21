import { MissesPage } from "./pages/misses.page";
import { browser } from "protractor";

describe("Testing misses component", () => {
  let page: MissesPage;

  beforeEach(() => {
    page = new MissesPage();
  });

  it("Filter inputs count should be 6", async () => {
    page.getPage();
    browser.waitForAngular();
    page.getFiltersFormInputs().then(inputs => {
      expect(inputs.length).toBe(6);
    });
  });

  it("Filter inputs filling correct", async () => {
    const inputs = await page.getFiltersFormInputs();
    inputs.forEach(async input => {
      await input.sendKeys("aaa");
      expect(await input.getAttribute("value")).toEqual("aaa");
    });
  });

  it("Filter clear button work", async () => {
    const inputs = await page.getFiltersFormInputs();
    inputs.forEach(async input => {
      await input.sendKeys("aaa");
    });

    await browser.sleep(500);

    const clearButton = await page.getFilterClearButton();
    await clearButton.click();

    inputs.forEach(async input => {
      expect(await input.getAttribute("value")).toEqual("");
    });
  });

  it("Test quantity selection", async () => {
    const checkboxes = await page.getCheckboxes();
    let count: number;
    checkboxes.forEach(async (checkbox, index) => {
      if (index) {
        await checkbox.click();
        count = index;
      }
    });

    await browser.sleep(500);
    expect(await page.getQuatitySelection().getText()).toEqual(
      `Кол-во выделенных: ${count}`
    );

    checkboxes.forEach(async (checkbox, index) => {
      if (index) {
        await checkbox.click();
        count = index;
      }
    });

    await browser.sleep(500);
    expect(await page.getQuatitySelection().getText()).toEqual(
      `Кол-во выделенных: 0`
    );
  });

  it("Test print table", async () => {
    const checkboxes = await page.getCheckboxes();
    
    let count: number;
    checkboxes.forEach(async (checkbox, index) => {
      if (index) {
        await checkbox.click();
        count = index;
      }
    });

    await browser.sleep(500);

    const toPrintBtn = await page.getToPrintButton();
    toPrintBtn.click();

    await browser.sleep(500);

    const toPrintTableRows = await page.getToPrintTableRows();
    expect(await toPrintTableRows.length).toBe(count + 1);
  });

});
