import { Component } from '@angular/core';
import { Routes } from '@angular/router';
// import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    
    {path: '' ,component:  HomeComponent},
    {path: 'Contact' ,component:  ContactComponent},
    {path: 'Product' ,component:ProductComponent  },
    {path: 'Product/:id' ,component:  SingleComponent},
    {path: '**' ,component:  NotfoundComponent}
   

];
