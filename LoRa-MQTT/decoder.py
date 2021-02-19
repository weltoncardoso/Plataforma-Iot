import json
import base64

class Decode:
    def decode(payload_json_input, json_params):
        # Recebe o mensagem no formato JSON e com os cabeçalhos da API da everynet
        payload_json_full = json.loads(payload_json_input)

        # Separa os bytes de payload da mensagem completa
        payload = payload_json_full["params"]["payload"]
        payload_bytes = (base64.b64decode(payload))

        # Este é a mensagem a ser enviada para o back-end somente com as variáveis configuradas pelo usuário
        payload_json = {}

        # Este for comuta cada variável a ser processada
        for i in range(len(json_params["variables"]["var"])):
            variavel = json_params["variables"]["var"][i]

            # Registra o byte inicial de posição de uma variavel dentro do payload
            byte_min = json_params["bytes"][variavel][0]
            # Registra o byte final de posição de uma variavel dentro do payload
            byte_max = json_params["bytes"][variavel][1]

            # Inicializa o valor bruto variável ser processada
            var = 0
            # Transforma os bytes lidos do payload de cada variável em inteiro de acordo com a leitura na ordem especificada
            if ("big" in json_params["order"]):
                var = int.from_bytes(payload_bytes[byte_min:byte_max + 1], byteorder = "big")
            elif ("little" in json_params["order"]):
                var = int.from_bytes(payload_bytes[byte_min:byte_max + 1], byteorder = "little")
            
            # Verifica se existe o parâmetro if para processamento condicional da variável configurado pelo usuario
            if ("if" in json_params.keys()):
                if (variavel in json_params["if"]["var"][i]):
                    # Alias de valores
                    param_comp = json_params["if"]["comp"][i]
                    param_args = json_params["if"]["args"][i]
                    param_do   = json_params["if"]["do"][i]
                    param_arg_do = json_params["if"]["arg_do"][i]
                    param_else   = json_params["if"]["else"][i]
                    param_arg_else = json_params["if"]["arg_else"][i]

                    if (param_comp):
                        if ("and" in param_comp):
                            if (var & int(param_args)):
                                if ("sum" in param_do):
                                    var += param_arg_do
                                elif ("div" in param_do):
                                    var /= param_arg_do
                                elif ("mux" in param_do):
                                    var *= param_arg_do
                            else:
                                if ("sum" in param_else):
                                    var += param_arg_else
                                elif ("div" in param_else):
                                    var /= param_arg_else
                                elif ("mux" in param_else):
                                    var *= param_arg_else
                        elif ("or" in param_comp):
                            if (var or param_arg_do):
                                if ("sum" in param_do):
                                    var += param_arg_do
                                elif ("div" in param_do):
                                    var /= param_arg_do
                                elif ("mux" in param_do):
                                    var *= param_arg_do
                            else:
                                if ("sum" in param_else):
                                    var += param_arg_else
                                elif ("div" in param_else):
                                    var /= param_arg_else
                                elif ("mux" in param_else):
                                    var *= param_arg_else
                        elif ("lt" in param_comp):
                            if (var < param_args):
                                if ("sum" in param_do):
                                    var += param_arg_do
                                elif ("div" in param_do):
                                    var /= param_arg_do
                                elif ("mux" in param_do):
                                    var *= param_arg_do
                            else:
                                if ("sum" in param_else):
                                    var += param_arg_else
                                elif ("div" in param_else):
                                    var /= param_arg_else
                                elif ("mux" in param_else):
                                    var *= param_arg_else
                        elif ("gt" in param_comp):
                            if (var > param_args):
                                if ("sum" in param_do):
                                    var += param_arg_do
                                elif ("div" in param_do):
                                    var /= param_arg_do
                                elif ("mux" in param_do):
                                    var *= param_arg_do
                            else:
                                if ("sum" in param_else):
                                    var += param_arg_else
                                elif ("div" in param_else):
                                    var /= param_arg_else
                                elif ("mux" in param_else):
                                    var *= param_arg_else
            # Este for comuta as operações configuradas para cada variável a ser processada
            for j in range(len(json_params["operations"][variavel])):
                # Distigue o tipo de operação na ordem configurada pelo usuário 
                if ("sum" in json_params["operations"][variavel][j]):
                    #print("Operacao de Soma Detectada")
                    var += json_params["args"][variavel][j]
                elif ("div" in json_params["operations"][variavel][j]):
                    #print("Operacao de Divisao Detectada")
                    var /= json_params["args"][variavel][j]
                elif ("mask" in json_params["operations"][variavel][j]):
                    #print("Operacao de Mascaramento Detectada")
                    var &= json_params["args"][variavel][j]
                elif ("mux" in json_params["operations"][variavel][j]):
                    #print("Operacao de Multiplicacao Detectada")
                    var *= json_params["args"][variavel][j]
                
                # Conclui a parte da mensagem com o valor da variável totalmente processada
                if (j == len(json_params["operations"][variavel]) - 1):
                    payload_json[variavel] = var

        # Registra o tempo de envio
        ts = payload_json_full["meta"]["time"]
        payload_json["ts"] = ts

        # Retorna no formato JSON a mensagem finalizada
        print(json_params["name"]+': '+str(payload_json)+'\n')
        return payload_json



