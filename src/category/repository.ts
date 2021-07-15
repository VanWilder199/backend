import { Category } from './category';
import {Item} from "../item/item";

const categories: Category[] = [
  {
    id: 1,
    name: 'ActionA',
    count: 3,
    imgSrc: './assets/img/angry.jpg'
  },
  {
    id: 2,
    name: 'ActionB',
    count: 2,
    imgSrc: './assets/img/bird.jpg'
  }, {
    id: 3,
    name: 'AnimalA',
    count: 1,
    imgSrc: './assets/img/cry.jpg'
  }, {
    id: 4,
    name: 'AnimalB',
    count: 0,
    imgSrc: './assets/img/dog.jpg'
  }, {
    id: 5,
    name: 'House',
    count: 0,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/200px-Man_silhouette.svg.png'
  }, {
    id: 6,
    name: 'Outdoors',
    count: 0,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/200px-Man_silhouette.svg.png'
  }, {
    id: 7,
    name: 'Clothes',
    count: 0,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/200px-Man_silhouette.svg.png'
  },
  {
    id: 8,
    name: 'Emotion',
    count: 0,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/200px-Man_silhouette.svg.png'
  },
];

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categories);
}

export function getCategoryById(categoryId: number): Promise<Category | undefined> {
  return Promise.resolve(categories.find((cat) => cat.id === categoryId));
}

export function createCategory(category: Category): Promise<Category> {
  const isExist = typeof categories
    .find((cat) => cat.name.toLowerCase() === category.name.toLowerCase()) !== 'undefined';
  if (isExist) {
    return Promise.reject(new Error(`Category with name ${category.name} is already exists`));
  }

  const id = categories.length + 1;
  const model = { ...category, id };
  categories.push(model);

  return Promise.resolve(model);
}
export function UpdateCategory(category: Category): Promise<Category> {
  const itemIndex = categories.findIndex((it) => it.id === category.id);
  if (itemIndex < 0) {
    return Promise.reject(new Error('Item not found'));
  }
  const existsItem = categories.splice(itemIndex, 1,category)[0];
  const newItem: Category = {
    ...existsItem,
    ...category,
  };
  return Promise.resolve(newItem);
}
export function deleteCategory(id: number): Promise<void> {
  const index = categories.findIndex((cat) => cat.id === id);
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categories.splice(index, 1);
  return Promise.resolve();
}


