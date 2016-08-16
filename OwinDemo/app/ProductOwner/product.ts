export class Product {
    public Id: number;
    public Name: string;
    public Description: string;
    public Type: ProductType;
    public HomepageUrl: string;
    public PlaystoreUrl: string;
    public AppstoreUrl: string;
}
enum ProductType {
    Mobile = 1,
    web = 2,
    IoT = 3
}