import {ContainerModule, interfaces} from 'inversify';
import {PRODUCT_LIST} from './types';
import ProductListService from '../data/service/ProductListService';
import ProductListViewModel from '../presentation/viewModel/ProductListViewModel';
import FetchProductListUseCase from '../domain/usecase/FetchProductListUseCase';
import ProductListRepositoryInterface from '../domain/repository/ProductListRepositoryInterface';
import ProductListViewModelInterface from '../presentation/viewModel/ProductListViewModelInterface';
import ProductListRepositoryMock from '../data/repository/ProductListRepositoryMock';

const productListModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<ProductListService>(PRODUCT_LIST.ProductListService).to(ProductListService);
    bind<ProductListRepositoryInterface>(PRODUCT_LIST.ProductListRepositoryInterface).to(ProductListRepositoryMock);
    bind<FetchProductListUseCase>(PRODUCT_LIST.FetchProductListUseCase).to(FetchProductListUseCase);
    bind<ProductListViewModelInterface>(PRODUCT_LIST.ProductListViewModelInterface).to(ProductListViewModel);
});

export default productListModule;