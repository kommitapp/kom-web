import RollupStart from './main.svelte';

import * as OLSKRemoteStoragePackage from 'OLSKRemoteStorage';
const OLSKRemoteStorage = OLSKRemoteStoragePackage.default || OLSKRemoteStoragePackage;

const KOMReviewStats = new RollupStart({
	target: document.body,
	props: Object.assign({}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e) {
		if (['KOMReviewStatsDeck'].includes(e[0])) {
			e[1] = JSON.parse(e[1]);

			[].concat(e[1].$KOMDeckSpacings, e[1].$KOMDeckTodayStudiedSpacings || []).map(OLSKRemoteStorage.OLSKRemoteStoragePostJSONParse).forEach(function (e) {
				if (e.KOMSpacingChronicles) {
					e.KOMSpacingChronicles.forEach(OLSKRemoteStorage.OLSKRemoteStoragePostJSONParse);
				}
			});
		}

		return e;
	}))),
});

export default KOMReviewStats;
