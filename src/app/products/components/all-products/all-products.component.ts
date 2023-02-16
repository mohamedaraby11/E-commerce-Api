import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {

  }
  ngOnInit(): void {
    this.getProducts();
    this.getcategories();

  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert(error.message);
    })
  }

  getcategories() {
    this.loading = true;

    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      this.loading = false;

    }, error => {
      alert(error.message);
      this.loading = false;

    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategory(value)

  }

  getProductsCategory(keyword: string) {
    this.loading = true;

    this.service.getProductsByCategory(keyword).subscribe((res: any) => {

      this.products = res;
      this.loading = false;

    })
  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exisit = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exisit) {
        alert("Product already in your Cart")

      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));

      }

    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));

    }
  }



}
