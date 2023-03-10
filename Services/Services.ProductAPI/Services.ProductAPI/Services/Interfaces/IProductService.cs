using Services.ProductAPI.Models;
using Services.ProductAPI.Models.RequsetModels;

namespace Services.ProductAPI.Services.Interfaces;

public interface IProductService
{
    Task<ProductCreateResponseModel> CreateProduct(ProductCreateRequestModel requestModel);

    Task<ProductGetAllResponseModel> GetAllProducts();

    Task<ProductGetResponseModel> GetProductById(int id);

    Task<ProductDeleteResponseModel> DeleteProduct(int id);

    Task<ProductUpdateResponseModel> UpdateProduct(ProductUpdateRequestModel requestModel);
}