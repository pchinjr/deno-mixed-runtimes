@app
begin-app

@http
get /
post /pray

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
