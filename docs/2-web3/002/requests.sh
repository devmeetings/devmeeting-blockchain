# Uruchamiamy parity, które domyslnie wystawia JSON-RPC over HTTP na porcie :8545
$ parity --jsonrpc-apis eth

# Do wykonywania requestow polecam narzędzie httpie (https://httpie.org/)
$ http localhost:8545 jsonrpc=2.0 id=1 method=eth_blockNumber params:='[]'

# 10/ Większość liczb (U256) będzie zakodowana jako hex
HTTP/1.1 200 OK
Content-Type: application/json
Date: Tue, 03 Apr 2018 07:42:34 GMT
Transfer-Encoding: chunked

{
    "id": 1, 
    "jsonrpc": "2.0", 
    "result": "0x6622a9"
}

# 13/ Lista dostępnych kont
$ http localhost:8545 jsonrpc=2.0 id=1 method=eth_accounts params:='[]'
HTTP/1.1 200 OK
Content-Type: application/json
Date: Tue, 03 Apr 2018 07:44:56 GMT
Transfer-Encoding: chunked

{
    "id": 1, 
    "jsonrpc": "2.0", 
    "result": [
        "0x00a329c0648769a73afac7f9381e08fb43dbea72", 
    ]
}

# 11/ Balans (ETH) konta
$ http localhost:8545 jsonrpc=2.0 id=1 method=eth_getBalance params:='["0x00a329c0648769a73afac7f9381e08fb43dbea72"]'
HTTP/1.1 200 OK
Content-Type: application/json
Date: Tue, 03 Apr 2018 07:46:48 GMT
Transfer-Encoding: chunked

{
    "id": 1, 
    "jsonrpc": "2.0", 
    "result": "0x456b9629f0a15c00"
}
