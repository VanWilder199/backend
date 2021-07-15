import { Item } from './item';

const items: Item[] = [
  {
    word: 'cry',
    translation: 'плакать',
    image: './assets/img/cry.jpg',
    audioSrc: './assets/audio/cry.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 1,
    categoryWord: 'actionA',
  },
  {
    word: 'dance',
    translation: 'танцевать',
    image: './assets/img/dance.jpg',
    audioSrc: './assets/audio/dance.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 1,
    categoryWord: 'actionA',
  },
  {
    word: 'open',
    translation: 'открывать',
    image: './assets/img/open.jpg',
    audioSrc: './assets/audio/open.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 2,
    categoryWord: 'actionB',
  },
  {
    word: 'play',
    translation: 'играть',
    image: './assets/img/play.jpg',
    audioSrc: './assets/audio/play.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 2,
    categoryWord: 'actionB',
  },
  {
    word: 'swim',
    translation: 'плавать',
    image: './assets/img/swim.jpg',
    audioSrc: './assets/audio/swim.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 2,
    categoryWord: 'actionB',
  },
  {
    word: 'sidewalk',
    translation: 'тротуар',
    image: './assets/img/sidewalk.jpg',
    audioSrc: './assets/audio/sidewalk.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 3,
    categoryWord: 'outdoors',
  },
  {
    word: 'road',
    translation: 'дорога',
    image: './assets/img/road.jpg',
    audioSrc: './assets/audio/road.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 3,
    categoryWord: 'outdoors',
  },
  {
    word: 'table',
    translation: 'стол',
    image: './assets/img/table.jpg',
    audioSrc: './assets/audio/table.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 4,
    categoryWord: 'house',
  },
  {
    word: 'lamp',
    translation: 'лампа',
    image: './assets/img/lamp.jpg',
    audioSrc: './assets/audio/lamp.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 4,
    categoryWord: 'house',
  },
  {
    word: 'cat',
    translation: 'кот',
    image: './assets/img/cat.jpg',
    audioSrc: './assets/audio/cat.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 5,
    categoryWord: 'animalA',
  },
  {
    word: 'chick',
    translation: 'цыплёнок',
    image: './assets/img/chick.jpg',
    audioSrc: './assets/audio/chick.mp3',
    trainClick: 0,
    rightAnswer: 0,
    errorAnswer: 0,
    categoryId: 5,
    categoryWord: 'animalB',
  },
];

export function getItems(): Promise<Item[]> {
  return Promise.resolve<Item[]>(items);
}

export function getItemByName(name: string): Promise<Item | undefined> {
  return Promise.resolve(items.find((it) => it.word.toLowerCase() === name.toLowerCase()));
}

export function createItem(item: Item): Promise<Item> {
  const isExist = typeof items.find((it) => it.word.toLowerCase() === item.word.toLowerCase()) !== 'undefined';
  if (isExist) {
    return Promise.reject(new Error(`Item with name ${item.word} is already exists.`));
  }
  items.push(item);
  return Promise.resolve(item);
}

export function updateItem(item: Item): Promise<Item> {
  const itemIndex = items.findIndex((it) => it.categoryId === item.categoryId);
  if (itemIndex < 0) {
    return Promise.reject(new Error('Item not found'));
  }
  const existsItem = items.splice(itemIndex, 1, item)[0];
  const newItem: Item = {
    ...existsItem,
    ...item,
  };
  // items.push(newItem);
  return Promise.resolve(newItem);
}

export function deleteItem(word: string): Promise<void> {
  const index = items.findIndex((it) => it.word.toLowerCase() === word.toLowerCase());
  if (index < 0) {
    Promise.reject(new Error('Item not found.'));
  }
  items.splice(index, 1);
  return Promise.resolve();
}
