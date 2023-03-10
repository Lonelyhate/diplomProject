using System.Text.Json.Serialization;

namespace Services.ProductAPI.Models.ViewModels;

/// <summary>
/// Представление товара
/// </summary>
public class ProductViewModel
{
    /// <summary>
    /// Идентификатор
    /// </summary>
    [JsonPropertyName("id")]
    public int Id { get; set; }
    
    /// <summary>
    /// Название
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; set; }
    
    /// <summary>
    /// Цена
    /// </summary>
    [JsonPropertyName("price")]
    public double Price { get; set; }
    
    /// <summary>
    /// Разамер
    /// </summary>
    [JsonPropertyName("size")]
    public string Size { get; set; }
    
    /// <summary>
    /// Описание
    /// </summary>
    [JsonPropertyName("description")]
    public string Description { get; set; }
    
    /// <summary>
    /// Изображения
    /// </summary>
    [JsonPropertyName("images")]
    public string Images { get; set; }
    
    /// <summary>
    /// Идентификатор категории
    /// </summary>
    [JsonPropertyName("categoryid")]
    public int CategoryId { get; set; }

    /// <summary>
    /// Категория
    /// </summary>
    [JsonPropertyName("category")]
    public virtual CategoryViewModel Category { get; set; }
}