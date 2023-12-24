
let products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5' }
];

interface Product {
    id: number;
    name: string;
    description: string;
}


export default products