import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body ('description' ) prodDesc: string,
        @Body ('price') prodPrice : number
    ) {
        const data = this.productService.insertProduct(prodTitle, prodDesc, prodPrice)
        return data;
    }

    @Get()
    getAllProducts() {
        return this.productService.fetchProducts();
    }

    @Get(':id')
    getProducts(@Param('id') prodId: string) {
        return this.productService.getSinglProducts(prodId)
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ){
        this.productService.updateProduct(prodId,prodTitle,prodDesc,prodPrice)
        return null
    }

    @Delete(':id')
    removeProduct(
        @Param('id') prodId: string
        ) {
            console.log('first')
            this.productService.deleteProduct(prodId);
            return "Product deleted"
    }

}