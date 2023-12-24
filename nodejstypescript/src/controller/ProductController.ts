import { Request, Response } from 'express';
import PRODUCT from '../database/InMemory'

const ProductList = async (req: Request, res: Response) => {
    try {
        const result = PRODUCT
        return res.status(200).json({
            message: result,
        });
    } catch (error: any) {
        return res.status(error?.statusCode || 500).json({
            message: error?.message || "Something went wrong.",
        });
    }
};

const ProductById = async (req: Request, res: Response) => {
    try {

        const productId = parseInt(req.params.id, 0);
        const result = PRODUCT.find(p => p.id === productId);

        if (result) {
            return res.status(200).json({
                message: result,
            });
        } else {
            res.status(404).json({
                message: 'Product not found'
            });
        }

    } catch (error: any) {
        return res.status(error?.statusCode || 500).json({
            message: error?.message || "Something went wrong.",
        });
    }
};

const AddNewProduct = async (req: Request, res: Response) => {
    try {

        if (!('name' in req.body)) {
            return res.status(400).json({
                message: "name required in body"
            })
        }

        const newProductId = PRODUCT.length + 1;
        const newProduct = {
            id: newProductId,
            name: req?.body?.name || "default name",
            description: req?.body?.description || "default description",
        };

        PRODUCT.push(newProduct);

        return res.status(201).json({
            message: {
                id: newProductId
            },
        });
    } catch (error: any) {
        return res.status(error?.statusCode || 500).json({
            message: error?.message || "Something went wrong.",
        });
    }
};

const DeleteProductById = async (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id, 0);
        const idx = PRODUCT.findIndex(p => p.id === productId);

        if (idx && idx >= 0) {
            PRODUCT.splice(idx, 1)

            return res.status(200).json({
                message: 'deleted',
            });
        } else {
            res.status(404).json({
                message: 'Product not found'
            });
        }

    } catch (error: any) {
        return res.status(error?.statusCode || 500).json({
            message: error?.message || "Something went wrong.",
        });
    }
};

export default {
    ProductList,
    ProductById,
    AddNewProduct,
    DeleteProductById
};
