# Requerimentos
A máquina que for rodar esta API precisa ter Python 3.x instalado, bem como as bibliotecas listadas abaixo:
* FastAPI
* uvicorn
* pymongo
* pydantic
* py_singleton

Todas as bibliotecas podem ser instaladas atravéz do PiP pelo cmd.
* pip install 'nome' (tudo em caixa baixa)

Por fim, para rodar o servidor, basta navegar o terminal até a pasta onde o 'server.py' está e montar o mesmo no uvicorn com a seguinte linha de comando:
* uvicorn server:app --reload

Para rodar expondo o seu IP, a linha de comando muda um pouco:
* uvicorn server:app --host *seu.ip* --port *porta* --reload

Caso seja necessário fazer alterações no código a fins de testes, o atributo '--reload' permite que a aplicação pegue qualquer alteração que você fizer em tempo real
após salvar o código, sem precisar ficar reiniciando toda vez.
**Não salvar alterações feitas a fim de teste diretamente na master branch.** Usar sempre branches separadas para estes fins.

## /csv/"coleção"
Rota alternativa que retorna um arquivo .csv do banco de dados da coleção especificada na URL. Requer a seguinte biblioteca:
* pandas

Caso queira desabilitar esta rota por não precisar e, portanto, não necessitar instalar uma biblioteca a mais, basta ir em 'server.py' e comentar a 3a linha do código. (from modules.csv_route import csv_route)
