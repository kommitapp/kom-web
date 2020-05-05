const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const KOMPlayLogic = require('./ui-logic.js').default;

const kTesting = {
	uCards () {
		return KOMPlayLogic._KOMPlaySortShuffle(Array.from(new Array(2)).map(function (e, i) {
			return {
				KOMCardID: (i + 1).toString(),
				KOMCardQuestion: (i + 1).toString(),
				KOMCardAnswer: 'charlie',
				KOMCardHint: 'delta',
				KOMCardCreationDate: new Date('2019-02-23T13:56:36Z'),
				KOMCardModificationDate: new Date('2019-02-23T13:56:36Z'),
			};
		}))
	},
	uSpacings () {
		return KOMPlayLogic._KOMPlaySortShuffle(Array.from(new Array(2)).map(function (e, i) {
			return {
				KOMSpacingID: (i + 1).toString() + '-forward',
				KOMSpacingDueDate: i === 1 ? new Date() : undefined,
			};
		}))
	},
};

Object.entries({
	KOMPlay: '.KOMPlay',

	KOMPlayToolbar: '.KOMPlayToolbar',
	KOMPlayToolbarBackButton: '.KOMPlayToolbarBackButton',
	KOMPlayToolbarDoneButton: '.KOMPlayToolbarDoneButton',

	KOMPlayCard: '.KOMPlayCard',
	KOMPlayCardQuestion: '.KOMPlayCardQuestion',
	KOMPlayCardAnswer: '.KOMPlayCardAnswer',
	KOMPlayCardHint: '.KOMPlayCardHint',

	KOMPlayResponseButtonAgain: '.KOMPlayResponseButtonAgain',
	KOMPlayResponseButtonHard: '.KOMPlayResponseButtonHard',
	KOMPlayResponseButtonGood: '.KOMPlayResponseButtonGood',
	KOMPlayResponseButtonEasy: '.KOMPlayResponseButtonEasy',

	KOMPlayConclusion: '.KOMPlayConclusion',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('KOMPlay_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			KOMPlayCards: JSON.stringify(kTesting.uCards()),
			KOMPlaySpacings: JSON.stringify(kTesting.uSpacings()),
		});
	});

	it('shows KOMPlay', function () {
		browser.assert.elements(KOMPlay, 1);
	});

	it('shows KOMPlayToolbar', function () {
		browser.assert.elements(KOMPlayToolbar, 1);
	});

	it('shows KOMPlayToolbarBackButton', function () {
		browser.assert.elements(KOMPlayToolbarBackButton, 1);
	});

	it('shows KOMPlayToolbarDoneButton', function () {
		browser.assert.elements(KOMPlayToolbarDoneButton, 1);
	});

	it('shows KOMPlayCard', function () {
		browser.assert.elements(KOMPlayCard, 1);
	});

	it('shows KOMPlayCardQuestion', function () {
		browser.assert.elements(KOMPlayCardQuestion, 1);
	});

	it('hides KOMPlayCardAnswer', function () {
		browser.assert.elements(KOMPlayCardAnswer, 0);
	});

	it('hides KOMPlayCardHint', function () {
		browser.assert.elements(KOMPlayCardHint, 0);
	});

	it('hides KOMPlayResponseButtonAgain', function () {
		browser.assert.elements(KOMPlayResponseButtonAgain, 0);
	});

	it('hides KOMPlayResponseButtonHard', function () {
		browser.assert.elements(KOMPlayResponseButtonHard, 0);
	});

	it('hides KOMPlayResponseButtonGood', function () {
		browser.assert.elements(KOMPlayResponseButtonGood, 0);
	});

	it('hides KOMPlayResponseButtonEasy', function () {
		browser.assert.elements(KOMPlayResponseButtonEasy, 0);
	});

	it('hides KOMPlayConclusion', function () {
		browser.assert.elements(KOMPlayConclusion, 0);
	});

	context('flip', function () {

		before(function () {
			return browser.click(KOMPlayCard);
		});
		
		it('shows KOMPlayCardAnswer', function () {
			browser.assert.elements(KOMPlayCardAnswer, 1);
		});

		it('shows KOMPlayCardHint', function () {
			browser.assert.elements(KOMPlayCardHint, 1);
		});

		it('shows KOMPlayResponseButtonAgain', function () {
			browser.assert.elements(KOMPlayResponseButtonAgain, 1);
		});

		it('shows KOMPlayResponseButtonHard', function () {
			browser.assert.elements(KOMPlayResponseButtonHard, 1);
		});

		it('shows KOMPlayResponseButtonGood', function () {
			browser.assert.elements(KOMPlayResponseButtonGood, 1);
		});

		it('shows KOMPlayResponseButtonEasy', function () {
			browser.assert.elements(KOMPlayResponseButtonEasy, 1);
		});
	
	});

	context('next', function () {

		before(function () {
			return browser.click(KOMPlayResponseButtonEasy);
		});
		
		it('hides KOMPlayCardAnswer', function () {
			browser.assert.elements(KOMPlayCardAnswer, 0);
		});

		it('hides KOMPlayCardHint', function () {
			browser.assert.elements(KOMPlayCardHint, 0);
		});

		it('hides KOMPlayResponseButtonAgain', function () {
			browser.assert.elements(KOMPlayResponseButtonAgain, 0);
		});

		it('hides KOMPlayResponseButtonHard', function () {
			browser.assert.elements(KOMPlayResponseButtonHard, 0);
		});

		it('hides KOMPlayResponseButtonGood', function () {
			browser.assert.elements(KOMPlayResponseButtonGood, 0);
		});

		it('hides KOMPlayResponseButtonEasy', function () {
			browser.assert.elements(KOMPlayResponseButtonEasy, 0);
		});
	
	});

	context('KOMPlayConclusion', function () {

		before(function () {
			return browser.click(KOMPlayCard);
		});
		
		before(function () {
			return browser.click(KOMPlayResponseButtonEasy);
		});

		it('hides KOMPlayCard', function () {
			browser.assert.elements(KOMPlayCard, 0);
		});
		
		it('shows KOMPlayConclusion', function () {
			browser.assert.elements(KOMPlayConclusion, 1);
		});
	
	});

});
