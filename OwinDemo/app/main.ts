import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ProductOwnerComponent } from './ProductOwner/product_owner.component';
import { UserComponent } from './EndUser/user.component';
import { AdminComponent } from './Admin/admin.component';
import { HTTP_PROVIDERS } from '@angular/http';


bootstrap(UserComponent, [HTTP_PROVIDERS]);
bootstrap(AdminComponent, [HTTP_PROVIDERS]);
bootstrap(ProductOwnerComponent, [HTTP_PROVIDERS]);