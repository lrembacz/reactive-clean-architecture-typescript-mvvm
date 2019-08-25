import 'reflect-metadata';
const PRODUCT_LIST = {
    ProductListService: Symbol.for("ProductListService"),
    ProductListRepositoryInterface: Symbol.for("ProductListRepositoryInterface"),
    FetchProductListUseCase: Symbol.for("FetchProductListUseCase"),
    ProductListViewModelInterface: Symbol.for("ProductListViewModelInterface")
};

export { PRODUCT_LIST };