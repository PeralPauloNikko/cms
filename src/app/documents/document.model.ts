export class Document {
  public documentId: number;
  public name: string;
  public description: string;
  public imageUrl: string;
  public children: string;

  constructor(documentId: number, name: string, description: string, imageUrl: string, children: string) {
    this.documentId = documentId;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.children = children;
  }
}
