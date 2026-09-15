export type AggregatedResult = {
  article?: { title?: string; author?: string; description?: string; url?: string };
  city?: { status?: string; data?: { city?: string; state?: string; country?: string } };
  feed?: { title?: string; source?: string; summary?: string; overallSentimentLabel?: string };
};
