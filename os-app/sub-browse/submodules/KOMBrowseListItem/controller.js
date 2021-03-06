exports.OLSKControllerRoutes = function () {
	return [{
		OLSKRoutePath: '/stub/KOMBrowseListItem',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'KOMBrowseListItemStubRoute',
		OLSKRouteFunction(req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
	}];
};
