
export default class Product {
  name: String;
  id: Number;
  imageUrl: String;
  promoted: bool;
  category: string;
  description: string;

  constructor(id, {
    title: name,
    imageUrl,
    promoted,
    category,
    description,
   }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.promoted = promoted;
    this.category = category;
    this.description = description;
  }
}
