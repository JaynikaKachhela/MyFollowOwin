import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ProductOwnerComponent } from './ProductOwner/product_owner.component';
import { UserComponent } from './EndUser/user.component';
import { AdminComponent } from './Admin/admin.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.routes';

bootstrap(UserComponent, [HTTP_PROVIDERS, appRouterProviders]);
bootstrap(AdminComponent, [HTTP_PROVIDERS]);
bootstrap(ProductOwnerComponent, [HTTP_PROVIDERS, appRouterProviders]);