import type { ArticleResult } from "./article";
import type { CityResult } from "./city";
import type { FeedResult } from "./feed";

export type AggregatedResult = {
  article?: ArticleResult;
  city?: CityResult;
  feed?: FeedResult;
};
