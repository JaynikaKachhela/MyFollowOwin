export class Owners {
    public Id: string
    public UserName :string
    public ProductOwner: ProductOwner
    public isPending: boolean
     
}
export class ProductOwner {
    CompanyName: string
    FoundedYear: number
    sDescription: string
    WebsiteUrl: string   
}
