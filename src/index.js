addEventListener("fetch", event => {
  event.respondWith(
    new Response(`
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <title>MediaHub 跳板网站</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f7f7f7; }
          .container { background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.1); display: inline-block; }
          a { color: #0078D7; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>MediaHub 跳板网站</h1>
          <p>服务器 IP：<strong>117.72.146.0</strong></p>
          <p>
            访问电影网站：
            <a href="http://117.72.146.0:3000/movies" target="_blank">点击这里</a>
          </p>
        </div>
      </body>
      </html>
    `, { headers: { "Content-Type": "text/html" } })
  )
})
