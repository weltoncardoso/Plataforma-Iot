# Requerimentos
A máquina que for rodar esta API precisa ter Python 3.x instalado, bem como as bibliotecas listadas abaixo:
* FastAPI
* uvicorn
* pymongo
* pydantic
* py_singleton

Todas as bibliotecas podem ser instaladas atravéz do PiP pelo cmd.
* pip install 'nome' (tudo em caixa baixa)

Por fim, para rodar o servidor, basta navegar o terminal até a pasta onde o 'server.py' está montar o mesmo no uvicorn com a seguinte linha de comando:
* uvicorn server:app --reload

Para rodar expondo o seu IP, a linha de comando muda um pouco:
* uvicorn server:app --host *seu.ip* --port *porta* --reload

Caso seja necessário fazer alterações no código a fins de testes, o atributo '--reload' permite que a aplicação pegue qualquer alteração que você fizer em tempo real
após salvar o código, sem precisar ficar reiniciando toda vez.
**Não salvar alterações feitas a fim de teste diretamente na master branch.** Usar sempre branches separadas para estes fins.
