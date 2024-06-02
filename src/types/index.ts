// Define una interfaz para los resultados de los Pokémon
export interface PokemonResult {
  name: string
  url: string
}

// Define una interfaz para la respuesta de la API de Pokémon
export interface PokemonApiResponse {
  count: number
  next: string | null
  previous: string | null
  results?: PokemonResult[]
}
