import {helpers} from 'inversify-vanillajs-helpers';
import ProductListBase from '../presentation/view/ProductListBase';
import {PRODUCT_LIST} from './types';
import {injectHelper} from '../../common/di/decorator';
import FetchProductListUseCase from '../domain/usecase/FetchProductListUseCase';
import UseCase from '../../common/domain/UseCase';
import ProductListService from '../data/service/ProductListService';
import ProductListRepository from '../data/repository/ProductListRepository';
import ProductListViewModel from '../presentation/viewModel/ProductListViewModel';

helpers.annotate(UseCase);
helpers.annotate(ProductListService);
helpers.annotate(ProductListRepository, [PRODUCT_LIST.ProductListService]);
helpers.annotate(FetchProductListUseCase, [PRODUCT_LIST.ProductListRepositoryInterface]);
helpers.annotate(ProductListViewModel, [PRODUCT_LIST.FetchProductListUseCase]);
injectHelper(PRODUCT_LIST.ProductListViewModelInterface, ProductListBase, "productListViewModel");
