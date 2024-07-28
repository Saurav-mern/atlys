// types.ts (or define these in +page.svelte)
export interface FeedItem {
  userName: string;
  lastSeen: string;
  image: string;
  emo: string;
  message: string;
  comments: number;
}

export interface LoadData {
  userName: string;
  feed: FeedItem[];
}
