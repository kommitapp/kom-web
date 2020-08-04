const mod = {

	KOMReviewChartElementNormalizedBarWidth() {
		return 100;
	},

	KOMReviewChartElementNormalizedBarHeight() {
		return 10;
	},

	KOMReviewChartElementNormalizedBarScaleHorizontal(param1, param2) {
		if (typeof param1 !== 'function') {
			throw new Error('KOMErrorInputNotValid');
		}

		if (!Array.isArray(param2)) {
			throw new Error('KOMErrorInputNotValid');
		}

		if (!param2.length) {
			throw new Error('KOMErrorInputNotValid');
		}

		return param1()
			.range([0, mod.KOMReviewChartElementNormalizedBarWidth()])
			.domain([0, param2.reduce(function (coll, item) {
				return coll + item;
			}, 0)]);
	},

	KOMReviewChartElementNormalizedBarScaleColor(param1, param2, param3) {
		if (typeof param1 !== 'function') {
			throw new Error('KOMErrorInputNotValid');
		}

		if (!Array.isArray(param2)) {
			throw new Error('KOMErrorInputNotValid');
		}

		if (!Array.isArray(param3)) {
			throw new Error('KOMErrorInputNotValid');
		}

		if (param3.length < 3) {
			throw new Error('KOMErrorInputNotValid');
		}

		return param1()
			.domain(param3)
			.range(param2[param3.length].slice().reverse())
			.unknown('red');
	},

};

export default mod;