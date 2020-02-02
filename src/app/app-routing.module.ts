import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { UnauthorizedUserComponent } from "./unauthorized-user/unauthorized-user.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin-section/admin-section.module").then(
        m => m.AdminSectionModule
      )
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user-section/user-section.module").then(
        m => m.UserSectionModule
      )
  },
  {
    path: "unauthorized-user",
    component: UnauthorizedUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
