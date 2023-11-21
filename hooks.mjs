import { readFile } from 'node:fs/promises';

export const load = async (
	url,
	context,
	nextLoad,
) => {
	const loaded = await nextLoad(url, context);

	if (loaded.format === 'commonjs') {
		loaded.source ??= await readFile(new URL(loaded.responseURL ?? url));
	}

	return loaded;
};
