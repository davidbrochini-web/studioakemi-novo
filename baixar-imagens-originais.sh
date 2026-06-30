#!/usr/bin/env bash
# ===========================================================
# baixar-imagens-originais.sh
#
# Roda esse script NO SEU COMPUTADOR (não dá pra rodar aqui no
# ambiente do Claude, porque o acesso à rede dele é restrito e
# não inclui o domínio static.wixstatic.com).
#
# O que ele faz: baixa as imagens originais do site Wix atual
# e salva em assets/img/, com os mesmos nomes que já estão
# referenciados no index.html. Depois disso, é só trocar as
# URLs do index.html de "https://static.wixstatic.com/..." para
# "assets/img/nome-do-arquivo.png" (ou eu faço essa troca pra
# você depois que as imagens estiverem no repositório).
#
# Como usar:
#   1) Salve este arquivo na raiz do repositório clonado
#   2) chmod +x baixar-imagens-originais.sh
#   3) ./baixar-imagens-originais.sh
# ===========================================================

set -e
DESTINO="assets/img"
mkdir -p "$DESTINO"

declare -A IMAGENS=(
  ["logo-studio-akemi.jpg"]="https://static.wixstatic.com/media/128d6c_6b770221e2b6482793f717c5b43c3fd5~mv2.jpg"
  ["hero-funcional-pilates.png"]="https://static.wixstatic.com/media/128d6c_83dd585f9b1b4617b2129f1a057050ff~mv2.png"
  ["pilates-mulher-deitada.png"]="https://static.wixstatic.com/media/128d6c_d04c3211608f41c78008a7fe0277adcb~mv2.png"
  ["bg-treinamento-funcional.jpg"]="https://static.wixstatic.com/media/128d6c_ed2085236f4c4aaa8c030700f7969674~mv2.jpg"
  ["bg-plano-pilates.jpg"]="https://static.wixstatic.com/media/128d6c_0b2216c4eb684f9a8e4657f4b0b26ff0~mv2.jpg"
  ["bg-plano-treinamento.jpg"]="https://static.wixstatic.com/media/128d6c_66bc1d260cf64734a218d4e3a9c5f675~mv2.jpg"
  ["bg-combo.jpg"]="https://static.wixstatic.com/media/128d6c_e9ee45f3a80b49a89db7387d89bcf953~mv2.jpg"
  ["icone-instagram.png"]="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png"
  ["icone-facebook.png"]="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png"
)

for nome in "${!IMAGENS[@]}"; do
  url="${IMAGENS[$nome]}"
  echo "Baixando: $nome"
  curl -sL "$url" -o "$DESTINO/$nome"
done

echo ""
echo "Concluído. Imagens salvas em $DESTINO/"
echo "Próximo passo: dê commit e push, e me avise para eu trocar as URLs no index.html."
