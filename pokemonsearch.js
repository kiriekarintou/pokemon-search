async function getPokemonData(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      // ポケモン名が正しくないときのエラーハンドリング
      if (!response.ok) {
        throw new Error("ポケモンが見つかりません");
      }
  
      const data = await response.json();
  
      // 名前と画像を表示
      document.getElementById("pokemon-name").textContent = data.name;
      document.getElementById("pokemon-height").textContent = data.height;
      document.getElementById("pokemon-weight").textContent = data.weight; 
      document.getElementById("pokemon-image").src = data.sprites.front_default;
      document.getElementById("pokemon-image").alt = data.name;
    } catch (error) {
      // エラー処理: ポケモンが見つからない場合
      document.getElementById("pokemon-name").textContent = "ポケモンが見つかりません";
      document.getElementById("pokemon-height").textContent = "見つかりません"; 
      document.getElementById("pokemon-weight").textContent = "見つかりません"; 
      document.getElementById("pokemon-image").src = "";
      document.getElementById("pokemon-image").alt = "画像がありません";
      console.error(error.message);
    }
  }
  
  // ユーザーが入力したポケモン名で検索する
  function searchPokemon() {
    const pokemonName = document.getElementById("pokemon-input").value;
    getPokemonData(pokemonName);
  }
  