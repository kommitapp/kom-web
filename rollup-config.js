export default require('OLSKRollupScaffold').OLSKRollupScaffoldScanStart(__dirname, {
	OLSKRollupPluginSwapTokens: Object.assign(require('OLSKUIAssets').OLSKUIAssetsSwapTokens(), {
		OLSK_CRYPTO_PAIR_RECEIVER_PRIVATE_SWAP_TOKEN: process.env.OLSK_CRYPTO_PAIR_RECEIVER_PRIVATE,
		OLSK_CRYPTO_PAIR_SENDER_PUBLIC_SWAP_TOKEN: process.env.OLSK_CRYPTO_PAIR_SENDER_PUBLIC,
		OLSK_FUND_API_URL_SWAP_TOKEN: process.env.OLSK_FUND_API_URL,
		OLSK_FUND_FORM_URL_SWAP_TOKEN: process.env.OLSK_FUND_FORM_URL,
	}),
});
