/**
 * @api {get} /api/products Product List
 * @apiGroup Product
 * @apiSuccessExample Success-Response:
{
    "message": [
        {
            "id": 1,
            "name": "Product 1",
            "description": "Description for Product 1"
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "Description for Product 2"
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "Description for Product 3"
        },
        {
            "id": 4,
            "name": "Product 4",
            "description": "Description for Product 4"
        },
        {
            "id": 5,
            "name": "Product 5",
            "description": "Description for Product 5"
        }
    ]
}
 */

/**
 * @api {get} /api/products/:id Product By Id
 * @apiGroup Product
 * @apiParam {String} id Product Id in param (Required)
 * @apiSuccessExample Success-Response:
 {
    "message": {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3"
    }
}
 */

/**
 * @api {post} /api/products Add New Product
 * @apiGroup Product
 * @apiBody {string} name Product Name in body (Required)
 * @apiBody {string} description Product Description in body
 * @apiParamExample {json} Request-Example:
 * {
    "name":"this is my product name",
    "description":"this is my product description"
} 
* @apiSuccessExample Success-Response:
 * {
    "message": {
        "id": 6
    }
}
 */

/**
 * @api {delete} /api/products/:id Delete Product By id
 * @apiGroup Product
 * @apiParam {String} id Product Id in param (Required)
* @apiSuccessExample Success-Response:
{
    "message": "deleted"
}
 */
