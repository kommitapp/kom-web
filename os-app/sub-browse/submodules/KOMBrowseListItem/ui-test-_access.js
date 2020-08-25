const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	KOMBrowseListItem: '.KOMBrowseListItem',

	KOMBrowseListItemSuspended: '.KOMBrowseListItemSuspended',
	KOMBrowseListItemFront: '.KOMBrowseListItemFront',
	KOMBrowseListItemRear: '.KOMBrowseListItemRear',
	KOMBrowseListItemTags: '.KOMBrowseListItemTags',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('KOMBrowseListItem_Access', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, {
			KOMBrowseListItemObject: JSON.stringify({
				KOMCardFrontText: 'alfa',
				KOMCardRearText: 'bravo',
			}),
		});
	});

	it('shows KOMBrowseListItem', function () {
		browser.assert.elements(KOMBrowseListItem, 1);
	});

	it('hides KOMBrowseListItemSuspended', function () {
		browser.assert.elements(KOMBrowseListItemSuspended, 0);
	});

	it('shows KOMBrowseListItemFront', function () {
		browser.assert.elements(KOMBrowseListItemFront, 1);
	});

	it('shows KOMBrowseListItemRear', function () {
		browser.assert.elements(KOMBrowseListItemRear, 1);
	});

	it('shows KOMBrowseListItemTags', function () {
		browser.assert.elements(KOMBrowseListItemTags, 1);
	});

	context('KOMCardIsSuspended', function () {
		
		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				KOMBrowseListItemObject: JSON.stringify({
					KOMCardFrontText: 'alfa',
					KOMCardRearText: 'bravo',
					KOMCardIsSuspended: true,
				}),
			});
		});

		it('shows KOMBrowseListItemSuspended', function () {
			browser.assert.elements(KOMBrowseListItemSuspended, 1);
		});
	
	});

});
