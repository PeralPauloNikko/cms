export class Document {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public children: string;

  constructor(id: string, name: string, description: string, imageUrl: string, children: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.children = children;
  }
}
