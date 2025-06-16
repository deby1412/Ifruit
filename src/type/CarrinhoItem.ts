// type/CarrinhoItem.ts

export interface CarrinhoItem {
  id: number;                  // ID do item no carrinho (pode ser o ID da linha no banco)
  produtoId: number;           // ID do produto
  nomeProduto: string;         // Nome do produto
  quantidade: number;          // Quantidade adicionada ao carrinho
  precoUnitario: number;       // Preço de cada unidade do produto
  imagemUrl: string;           // URL da imagem do produto
  categoria: string;           // Categoria do produto (ex: Frutas, Verduras)
  unidade: string;             // Unidade de venda (ex: kg, un)
  precoOriginal?: number;      // Preço original do produto (caso haja desconto)
}
