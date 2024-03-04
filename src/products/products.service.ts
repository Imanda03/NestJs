import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    products: Product[]= [];

    insertProduct(title:string, description: string, price:number){
        const productId = Math.random().toString();
        const newProduct = new Product(productId, title, description, price)
        console.log(newProduct)
        this.products.push(newProduct);
        return {id: productId, title: title, description: description, price: price}
    }

    fetchProducts() {
        return [...this.products]
    }

    getSinglProducts(productId:string) {
        const product = this.findProduct(productId)[0]
        return {...product}
    }

    updateProduct(productId: string, title:string, description: string, price:number) {
        const [product, index] = this.findProduct(productId);
        const updateProduct = {...product}
        if(title) {
            updateProduct.title = title
        }
        if(description) {
            updateProduct.description = description
        }
        if(price) {
            updateProduct.price = price
        }
        this.products[index] = updateProduct;
    }


    deleteProduct(prodId:string) {
        const index = this.findProduct(prodId)[1]
        console.log(index)
        this.products.splice(index,1)
    }

    private findProduct(id:string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id)
        const product = this.products[productIndex]
        if(!product){
            throw new NotFoundException('Could not find products')
        } 
        return [product, productIndex];
    }
}