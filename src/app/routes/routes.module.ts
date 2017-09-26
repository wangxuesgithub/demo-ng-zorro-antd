import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
