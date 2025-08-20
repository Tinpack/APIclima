using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

//Redireciona HTTP para HTTPS
// Configura o CORS para permitir requisições do frontend React

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
// Adiciona o serviço de HttpClient para fazer requisições HTTP externas
builder.Services.AddHttpClient();
var app = builder.Build();

app.UseCors();// Habilita o CORS
// Endpoint de clima
app.MapGet("/clima/{cidade}", async (string cidade, [FromServices] IHttpClientFactory httpClientFactory) =>
{
    var client = httpClientFactory.CreateClient();
    var apiKey = "SUA_API_KEY"; // Substitua pela sua chave da OpenWeatherMap

    // Clima atual
    var urlAtual = $"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={apiKey}&units=metric&lang=pt_br";
    var responseAtual = await client.GetAsync(urlAtual);
    if (!responseAtual.IsSuccessStatusCode)
        return Results.NotFound(new { mensagem = "Cidade não encontrada" });
    // Retorna erro 404 se a cidade não for encontrada
    var jsonAtual = await responseAtual.Content.ReadAsStringAsync();
    var climaAtual = JsonSerializer.Deserialize<object>(jsonAtual);

    // Previsão (5 dias / 3h)
    var urlPrevisao = $"https://api.openweathermap.org/data/2.5/forecast?q={cidade}&appid={apiKey}&units=metric&lang=pt_br";
    var responsePrevisao = await client.GetAsync(urlPrevisao);
    if (!responsePrevisao.IsSuccessStatusCode)
        return Results.NotFound(new { mensagem = "Previsão não encontrada" });
    // Retorna erro 404 se a previsão não for encontrada
    var jsonPrevisao = await responsePrevisao.Content.ReadAsStringAsync();
    var previsao = JsonSerializer.Deserialize<object>(jsonPrevisao);

    // Retorna no formato que o React espera
    return Results.Ok(new
    {
        Atual = climaAtual,
        Previsao = previsao
    });
});
app.Run();// Inicia o aplicativo
