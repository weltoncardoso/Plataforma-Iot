gps_dragino = {
    "name": "gps_dragino",
    "variables": {
        "var": [ "lat", "long", "bateria"]
    },
    "bytes":{
        "lat": [0, 3],
        "long": [4, 7],
        "bateria": [8, 9]
    },
    "if":{
        "var":  [ "lat", "long", "bateria"],
        "comp" : ["and", "and","none"], #and, or, gt, lt, gt=, lt=
        "args" : [2147483648, 2147483648,0],
        "do" : ["sum", "sum","none"],
        "arg_do" : [-4294967296, -4294967296,0],
        "else": ["sum", "sum","none"],
        "arg_else" : [0, 0,0]
    },
    "operations":{
        "lat": ["div"],
        "long": ["div"],
        "bateria": ["mask","div"]
    },
    "args":{
        "lat": [1000000.0],
        "long": [1000000.0],
        "bateria":[65535, 1000.0]
    },
    "size": 11,
    "order": "big"
}


temp = {
    "name": "temp",
    "variables": {
        "var": [ "temp", "hum", "periodo", "bateria"]
    },
    "bytes":{
        "temp": [1, 2],
        "hum": [3, 3],
        "periodo": [4, 5],
        "bateria": [8, 8]
    },
    "operations":{
        "temp": ["mux","div", "sum"],
        "hum": ["mux","div", "sum"],
        "periodo": ["mux"],
        "bateria": ["sum", "div"]
    },
    "args":{
        "temp": [175.72, 65536, -46.85],
        "hum": [125.0, 256.0, -6.0],
        "periodo": [2],
        "bateria":[200, 100.0]
    },
    "size": 9,
    "order": "little"
}