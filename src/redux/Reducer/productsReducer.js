import { storeProducts } from '../../shared/productsData';

export const Products = (state = storeProducts, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
