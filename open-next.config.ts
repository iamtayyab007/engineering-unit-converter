// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
	// Remove R2 caching temporarily to fix build loops
	// incrementalCache: r2IncrementalCache,
});
