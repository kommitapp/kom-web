const mod = {

	KOMBrowseSort (a, b) {
		if (a.KOMCardModificationDate && b.KOMCardModificationDate) {
			return b.KOMCardModificationDate - a.KOMCardModificationDate;
		}

		return b.KOMCardCreationDate - a.KOMCardCreationDate;
	},

	KOMBrowseFilterFunction (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('KOMErrorInputNotValid');
		}

		return function (e) {
			return [e.KOMCardFront, e.KOMCardRear].filter(function (e) {
				if (!e) {
					return false;
				}

				return e.toLowerCase().match(inputData.toLowerCase());
			}).length;
		};
	},

};

Object.assign(exports, mod);
