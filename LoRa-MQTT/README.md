# Requerimentos
A máquina que for rodar este Cliente MQTT precisa ter Python 3.x instalado, bem como as bibliotecas listadas abaixo:
* paho-mqtt
* pymongo

Todas as bibliotecas podem ser instaladas atravéz do PiP pelo cmd.
* pip3 install 'nomedabiblioteca' (tudo em caixa baixa)

É necessário ter o MongoDB com a versão compatível com o Python em uso e estar rodando a instância do banco de dados 'testeProjeto' no endereço:
* mongodb://ibti:%23ibti%402021@localhost:27017/

Também é necessário estar com a porta 1883 liberada e com o IP da máquina cadastrado no broker da everynet.

Por fim, para rodar este cliente, basta navegar o terminal até a pasta onde o 'go.py' está e executar o script com a seguinte linha de comando:
* python3 go.py 
