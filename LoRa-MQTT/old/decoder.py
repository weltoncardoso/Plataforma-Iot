import json
import base64
from datetime import datetime

#payload = "/xBG/f0k8LcPC2M=" #gps
#payload2 = "AYllhgIA//93" #temp





class Decode:
    def decode(payload_json_input, json_object):

        print("#### DECODER ####")
        #print (payload_json)
        payload_json_full = json.loads(payload_json_input)
        payload = payload_json_full["params"]["payload"]
        payload_bytes = (base64.b64decode(payload))
        json_params = json_object
        #json.dumps(json_params)
        ts = payload_json_full["meta"]["time"]

        #print(len(json_params["variables"]["var"]))
        #print(json_params)

        payload_json = {}

        for i in range(len(json_params["variables"]["var"])):
            variavel = json_params["variables"]["var"][i]

            byte_min = json_params["bytes"][variavel][0]
            byte_max = json_params["bytes"][variavel][1]
            #byte_total = json_params["bytes"][json_params["variables"]["var"][len(json_params["variables"]["var"])-1]][1]
            byte_total = json_params["size"]
            var = 0
            #print("## " + variavel + " ##")
            shift = ((byte_total - byte_max) - 1)*8
            #print("SHIFT: " + str(shift))
            if ("big" in json_params["order"]):
                var = int.from_bytes(payload_bytes[byte_min:byte_max + 1], byteorder = "big")
                #var = var >> shift

            elif ("little" in json_params["order"]):
                var = int.from_bytes(payload_bytes[byte_min:byte_max + 1], byteorder = "little")
            #print(variavel + ": " + str(var))
            
            if ("if" in json_params.keys()):
                if (1):
                    if (variavel in json_params["if"]["var"][i]):
                        if (json_params["if"]["comp"][i]):
                            if ("and" in json_params["if"]["comp"][i]):
                                if (var & int(json_params["if"]["args"][i])):
                                    if ("sum" in json_params["if"]["do"][i]):
                                        var += json_params["if"]["arg_do"][i]
                                    elif ("div" in json_params["if"]["do"][i]):
                                        var /= json_params["if"]["arg_do"][i]
                                    elif ("mux" in json_params["if"]["do"][i]):
                                        var *= json_params["if"]["arg_do"][i]
                                else:
                                    if ("sum" in json_params["if"]["else"][i]):
                                        var += json_params["if"]["arg_else"][i]
                                    elif ("div" in json_params["if"]["else"][i]):
                                        var /= json_params["if"]["arg_else"][i]
                                    elif ("mux" in json_params["if"]["else"][i]):
                                        var *= json_params["if"]["arg_else"][i]
                            elif ("or" in json_params["if"]["comp"][i]):
                                if (var or json_params["if"]["args"][i]):
                                    if ("sum" in json_params["if"]["do"][i]):
                                        var += json_params["if"]["arg_do"][i]
                                    elif ("div" in json_params["if"]["do"][i]):
                                        var /= json_params["if"]["arg_do"][i]
                                    elif ("mux" in json_params["if"]["do"][i]):
                                        var *= json_params["if"]["arg_do"][i]
                                else:
                                    if ("sum" in json_params["if"]["else"][i]):
                                        var += json_params["if"]["arg_else"][i]
                                    elif ("div" in json_params["if"]["else"][i]):
                                        var /= json_params["if"]["arg_else"][i]
                                    elif ("mux" in json_params["if"]["else"][i]):
                                        var *= json_params["if"]["arg_else"][i]
                            elif ("lt" in json_params["if"]["comp"][i]):
                                if (var < json_params["if"]["args"][i]):
                                    if ("sum" in json_params["if"]["do"][i]):
                                        var += json_params["if"]["arg_do"][i]
                                    elif ("div" in json_params["if"]["do"][i]):
                                        var /= json_params["if"]["arg_do"][i]
                                    elif ("mux" in json_params["if"]["do"][i]):
                                        var *= json_params["if"]["arg_do"][i]
                                else:
                                    if ("sum" in json_params["if"]["else"][i]):
                                        var += json_params["if"]["arg_else"][i]
                                    elif ("div" in json_params["if"]["else"][i]):
                                        var /= json_params["if"]["arg_else"][i]
                                    elif ("mux" in json_params["if"]["else"][i]):
                                        var *= json_params["if"]["arg_else"][i]
                            elif ("gt" in json_params["if"]["comp"][i]):
                                if (var > json_params["if"]["args"][i]):
                                    if ("sum" in json_params["if"]["do"][i]):
                                        var += json_params["if"]["arg_do"][i]
                                    elif ("div" in json_params["if"]["do"][i]):
                                        var /= json_params["if"]["arg_do"][i]
                                    elif ("mux" in json_params["if"]["do"][i]):
                                        var *= json_params["if"]["arg_do"][i]
                                else:
                                    if ("sum" in json_params["if"]["else"][i]):
                                        var += json_params["if"]["arg_else"][i]
                                    elif ("div" in json_params["if"]["else"][i]):
                                        var /= json_params["if"]["arg_else"][i]
                                    elif ("mux" in json_params["if"]["else"][i]):
                                        var *= json_params["if"]["arg_else"][i]


            for j in range(len(json_params["operations"][variavel])):

                #print("i: " + str(i) + ", j: " + str(j))
                if ("sum" in json_params["operations"][variavel][j]):
                    #print("Operacao de Soma Detectada")
                    var += json_params["args"][variavel][j]
                    if (j == len(json_params["operations"][variavel]) - 1):
                        payload_json[variavel] = var
                elif ("div" in json_params["operations"][variavel][j]):
                    #print("Operacao de Divisao Detectada")
                    var /= json_params["args"][variavel][j]
                    if (j == len(json_params["operations"][variavel]) - 1):
                        payload_json[variavel] = var
                elif ("mask" in json_params["operations"][variavel][j]):
                    #print("Operacao de Mascaramento Detectada")
                    var &= json_params["args"][variavel][j]
                    if (j == len(json_params["operations"][variavel]) - 1):
                        payload_json[variavel] = var
                elif ("mux" in json_params["operations"][variavel][j]):
                    #print("Operacao de Multiplicacao Detectada")
                    var *= json_params["args"][variavel][j]
                    if (j == len(json_params["operations"][variavel]) - 1):
                        payload_json[variavel] = var

        payload_json["ts"] = ts
    #def Decoding (self):
        print("#### DECODER ####")
        print (str(payload_json))
        return payload_json



