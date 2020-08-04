import KOMSpacingModel from '../../../_shared/KOMSpacing/model.js';
import KOMPlayLogic from '../../../sub-play/ui-logic.js';

const mod = {

	KOMReviewGeneralTotalCards(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		const counted = {};

		return inputData.reduce(function (coll, item) {
			const id = KOMSpacingModel.KOMSpacingModelIdentifier(item.KOMSpacingID);

			if (counted[id]) {
				return coll;
			}

			counted[id] = true;

			return coll + 1;
		}, 0);
	},

	KOMReviewGeneralTotalMilliseconds(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.reduce(function (coll, item) {
			return coll + item.KOMSpacingChronicles.filter(function (e) {
				return KOMPlayLogic.KOMPlayDayGrouping(e.KOMChronicleResponseDate) === KOMPlayLogic.KOMPlayDayGrouping(new Date());
			}).reduce(function (responseTime, e) {
				return responseTime + (e.KOMChronicleResponseDate - e.KOMChronicleDrawDate);
			}, 0);
		}, 0);
	},

	KOMReviewGeneralMinutes(inputData) {
		if (typeof inputData !== 'number') {
			throw new Error('KOMErrorInputNotValid');
		}

		return Math.round(inputData / 1000 / 60 * 10) / 10;
	},

	KOMReviewGeneralReviewAccuracy(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return (function (scores) {
			if (!scores.length) {
				return 0;
			}

			return scores.reduce(function (coll, item) {
				return coll + item;
			}, 0) * 1.0 / scores.length;
		})(inputData.filter(function (e) {
			const items = e.KOMSpacingChronicles.filter(function (e) {
				return KOMPlayLogic.KOMPlayDayGrouping(e.KOMChronicleResponseDate) === KOMPlayLogic.KOMPlayDayGrouping(new Date());
			});

			if (!items.length) {
				return false;
			}

			if (!e.KOMSpacingChronicles.filter(function (e) {
				if (items.includes(e)) {
					return false;
				}

				return e.KOMChronicleMultiplier;
			}).length) {
				return false;
			}

			return true;
		}).map(function (e) {
			return e.KOMSpacingChronicles.filter(function (e) {
				return KOMPlayLogic.KOMPlayDayGrouping(e.KOMChronicleResponseDate) === KOMPlayLogic.KOMPlayDayGrouping(new Date());
			}).filter(function (e) {
				return e.KOMChronicleResponseType === KOMPlayLogic.KOMPlayResponseTypeAgain();
			}).length ? 0 : 1;
		}));
	},

	KOMReviewGeneralPercentage(inputData) {
		if (typeof inputData !== 'number') {
			throw new Error('KOMErrorInputNotValid');
		}

		return Math.round(inputData * 100 * 10) / 10;
	},

};

export default mod;