@app
arcmarkotodomvc

@html
get /

@json
get /todos

@plugins
arc-plugin-marko
  pages ./src/html/get-index/page.marko
  bucket marko-todomvc-bucket
