export interface Item {
  word: string;
  translation: string;
  audioSrc: string | ArrayBuffer | null;
  trainClick: number;
  rightAnswer: number;
  errorAnswer: number;
  categoryId: number;
  categoryWord: string;
  image?: string | ArrayBuffer | null;
}
