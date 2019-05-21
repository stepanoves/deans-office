import { browser, element, by } from 'protractor';

export class MissesPage {
    getPage() {
        return browser.get('/misses');
    }

    getFiltersFormInputs() {
        return element.all(by.css('.mat-input-element'));
    }

    getFilterClearButton() {
        return element(by.css('.reset-btn'));
    }

    getQuatitySelection() {
        return element(by.css('.quantity'));
    }

    getCheckboxes() {
        return element.all(by.tagName('mat-checkbox'))
    }
    
    getToPrintButton() {
        return element(by.css('.to-print-btn'));
    }

    getToPrintTableRows() {
        return element.all(by.tagName('tr'));
    }
}