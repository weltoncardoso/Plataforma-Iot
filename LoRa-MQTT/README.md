# Cliente de mensagens MQTT
Este cliente é responsável receber da Everynet todas as mensagens enviadas pelos dispositivos cadastrados na aplicação, registrar todas os dados no banco e repassar para o Kafka as mensagens com todos os dados já parametrizados com a programação feita pelo usuário que registrou o dispositivo.

# Requerimentos
A máquina que for rodar esta aplicação precisa ter Python 3.x instalado, bem como as bibliotecas listadas abaixo:
* paho-mqtt
* pymongo
* kafka-python

Todas as bibliotecas podem ser instaladas atravéz do PiP pelo cmd.
* pip3 install 'nomedabiblioteca' (tudo em caixa baixa)

É necessário ter o MongoDB com a versão compatível com o Python em uso e estar rodando a instância do banco de dados 'testeProjeto' no endereço:
* mongodb://ibti:%23ibti%402021@localhost:27017/

Também é necessário estar com a porta 1883 liberada e com o IP da máquina cadastrado no broker da everynet.

Basta navegar o terminal até a pasta onde o 'go.py' está e execute o script conector kafka antes com a seguinte linha de comando:
* python3 kafka_go.py

Por fim, Para rodar o cliente MQTT e seguinte linha de comando:
* python3 go.py 
