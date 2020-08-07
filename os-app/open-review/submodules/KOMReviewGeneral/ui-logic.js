import KOMSharedLogic from '../../../_shared/KOMSharedLogic/main.js';

const mod = {

	KOMReviewGeneralTableDays() {
		return 7;
	},

	KOMReviewGeneralUpcomingDates() {
		return Array.from(Array(mod.KOMReviewGeneralTableDays())).map(function (e, i) {
			return KOMSharedLogic.KOMSharedGroupingDay(new Date(Date.now() + 1000 * 60 * 60 * 24 * i));
		});
	},

	KOMReviewGeneralUpcomingFilter(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.filter(function (e) {
			if (!e.KOMSpacingDueDate) {
				return false;
			}
			
			if (KOMSharedLogic.KOMSharedGroupingDay(e.KOMSpacingDueDate) < KOMSharedLogic.KOMSharedGroupingDay(new Date())) {
				return false;
			}

			if (KOMSharedLogic.KOMSharedGroupingDay(e.KOMSpacingDueDate) >= KOMSharedLogic.KOMSharedGroupingDay(new Date(Date.now() + 1000 * 60 * 60 * 24 * mod.KOMReviewGeneralTableDays()))) {
				return false;
			}

			return true;
		});
	},

	KOMReviewGeneralUpcomingGroupByDate(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.reduce(function (coll, item) {
			coll[KOMSharedLogic.KOMSharedGroupingDay(item.KOMSpacingDueDate)] = (coll[KOMSharedLogic.KOMSharedGroupingDay(item.KOMSpacingDueDate)] || []).concat(item);

			return coll;
		}, {});
	},

	KOMReviewGeneralUpcomingColors() {
		return [
			KOMSharedLogic.KOMSharedColorMature(),
			KOMSharedLogic.KOMSharedColorDeveloping(),
			];
	},

	KOMReviewGeneralHistoricalDates() {
		return Array.from(Array(mod.KOMReviewGeneralTableDays())).map(function (e, i) {
			return KOMSharedLogic.KOMSharedGroupingDay(new Date(Date.now() - 1000 * 60 * 60 * 24 * i));
		});
	},

	KOMReviewGeneralHistoricalFilter(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.filter(function (e) {
			if (!e.KOMSpacingDueDate) {
				return false;
			}

			return e.KOMSpacingChronicles.filter(function (e) {
				if (KOMSharedLogic.KOMSharedGroupingDay(e.KOMChronicleResponseDate) > KOMSharedLogic.KOMSharedGroupingDay(new Date())) {
					return false;
				}

				if (KOMSharedLogic.KOMSharedGroupingDay(e.KOMChronicleResponseDate) < KOMSharedLogic.KOMSharedGroupingDay(new Date(Date.now() - 1000 * 60 * 60 * 24 * mod.KOMReviewGeneralTableDays()))) {
					return false;
				}

				return true;
			}).length;
		});
	},

	KOMReviewGeneralHistoricalGroupByDate(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.reduce(function (coll, item) {
			item.KOMSpacingChronicles.forEach(function (e) {
				const array = (coll[KOMSharedLogic.KOMSharedGroupingDay(e.KOMChronicleResponseDate)] || []);
				
				if (!array.includes(item)) {
					array.push(item);
				}

				coll[KOMSharedLogic.KOMSharedGroupingDay(e.KOMChronicleResponseDate)] = array;
			});

			return coll;
		}, {});
	},

	KOMReviewGeneralHistoricalTotalMilliseconds(inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('KOMErrorInputNotValid');
		}

		return inputData.reduce(function (coll, item) {
			return coll + (item.KOMChronicleResponseDate - item.KOMChronicleDrawDate);
		}, 0);
	},

	KOMReviewGeneralHistoricalColors() {
		return [
			KOMSharedLogic.KOMSharedColorMature(),
			KOMSharedLogic.KOMSharedColorDeveloping(),
			KOMSharedLogic.KOMSharedColorRelearning(),
			KOMSharedLogic.KOMSharedColorUnseen(),
			];
	},

	KOMReviewGeneralCollectionColors() {
		return [
			KOMSharedLogic.KOMSharedColorUnseen(),
			KOMSharedLogic.KOMSharedColorDeveloping(),
			KOMSharedLogic.KOMSharedColorMature(),
			KOMSharedLogic.KOMSharedColorSuspended(),
			];
	},

};

export default mod;
