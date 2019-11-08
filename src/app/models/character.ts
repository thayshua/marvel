export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  extension: Extension;
  path: string;
}

export enum Extension {
  JPG = 'jpg'
}
