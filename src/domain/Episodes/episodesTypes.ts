export interface Episodes {
  id: number;
  url: string | null;
  title: string;
  titleJapanese: string;
  titleRomanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
}

export interface EpisodesAPI {
  mal_id: number;
  url: string | null;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}
