const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const KOMReviewChartElementNormalizedBarLogic = require('../KOMReviewChartElementNormalizedBar/ui-logic.js').default;
const d3 = require('d3');

describe('KOMReviewChartCompositionStates_Misc', function () {

	const item = {
		KOMReviewChartCompositionStatesTotal: 1,
		KOMReviewChartCompositionStatesUnseen: 2,
		KOMReviewChartCompositionStatesDeveloping: 2,
		KOMReviewChartCompositionStatesMature: 3,
		KOMReviewChartCompositionStatesSuspended: 4,
	};

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, {
			KOMReviewChartCompositionStatesData: JSON.stringify(item),
		});
	});

	describe('KOMReviewChartCompositionStatesTotalCardsValue', function test_KOMReviewChartCompositionStatesTotalCardsValue() {

		it('sets text', function () {
			browser.assert.text(KOMReviewChartCompositionStatesTotalCardsValue, '1');
		});

	});

	describe.skip('KOMReviewChartCompositionStatesUnseenCardsColor', function test_KOMReviewChartCompositionStatesUnseenCardsColor() {

		it('sets style', function () {
			browser.assert.attribute(KOMReviewChartCompositionStatesUnseenCardsColor, 'style', `background: ${ KOMReviewChartElementNormalizedBarLogic.KOMReviewChartElementNormalizedBarScaleColor(d3.scaleOrdinal, d3.schemeGreys, Object.values(item))(2) }`);
		});

	});

	describe('KOMReviewChartCompositionStatesUnseenCardsValue', function test_KOMReviewChartCompositionStatesUnseenCardsValue() {

		it('sets text', function () {
			browser.assert.text(KOMReviewChartCompositionStatesUnseenCardsValue, '2');
		});

	});

	describe.skip('KOMReviewChartCompositionStatesDevelopingCardsColor', function test_KOMReviewChartCompositionStatesDevelopingCardsColor() {

		it('sets style', function () {
			browser.assert.attribute(KOMReviewChartCompositionStatesDevelopingCardsColor, 'style', `background: ${ KOMReviewChartElementNormalizedBarLogic.KOMReviewChartElementNormalizedBarScaleColor(d3.scaleOrdinal, d3.schemeGreys, Object.values(item))(2) }`);
		});

	});

	describe('KOMReviewChartCompositionStatesDevelopingCardsValue', function test_KOMReviewChartCompositionStatesDevelopingCardsValue() {

		it('sets text', function () {
			browser.assert.text(KOMReviewChartCompositionStatesDevelopingCardsValue, '2');
		});

	});

	describe.skip('KOMReviewChartCompositionStatesMatureCardsColor', function test_KOMReviewChartCompositionStatesMatureCardsColor() {

		it('sets style', function () {
			browser.assert.attribute(KOMReviewChartCompositionStatesMatureCardsColor, 'style', `background: ${ KOMReviewChartElementNormalizedBarLogic.KOMReviewChartElementNormalizedBarScaleColor(d3.scaleOrdinal, d3.schemeGreys, Object.values(item))(3) }`);
		});

	});

	describe('KOMReviewChartCompositionStatesMatureCardsValue', function test_KOMReviewChartCompositionStatesMatureCardsValue() {

		it('sets text', function () {
			browser.assert.text(KOMReviewChartCompositionStatesMatureCardsValue, '3');
		});

	});

	describe.skip('KOMReviewChartCompositionStatesSuspendedCardsColor', function test_KOMReviewChartCompositionStatesSuspendedCardsColor() {

		it('sets style', function () {
			browser.assert.attribute(KOMReviewChartCompositionStatesSuspendedCardsColor, 'style', `background: ${ KOMReviewChartElementNormalizedBarLogic.KOMReviewChartElementNormalizedBarScaleColor(d3.scaleOrdinal, d3.schemeGreys, Object.values(item))(4) }`);
		});

	});

	describe('KOMReviewChartCompositionStatesSuspendedCardsValue', function test_KOMReviewChartCompositionStatesSuspendedCardsValue() {

		it('sets text', function () {
			browser.assert.text(KOMReviewChartCompositionStatesSuspendedCardsValue, '4');
		});

	});

	describe('KOMReviewChartElementNormalizedBar', function test_KOMReviewChartElementNormalizedBar() {

		it('sets KOMReviewChartElementNormalizedBarValues', function () {
			browser.assert.elements('.KOMReviewChartElementNormalizedBarSection', 4);
		});

	});

});