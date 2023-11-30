Привет, я для удобства получения авторизационного токена, выложил вот такую страничку на Vercel
Vercel - бесплатный хостинг, в нем можно прямо из приватного репозитория проект взять, в данном случае он просто эту страничку отдает на запрос

Если у тебя в квери параметрах ключ тоже code то можно редирект на туже самую страницу сделать, https://you-token-landing.vercel.app/
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        *{
            box-sizing: border-box;

            margin: 0;
            padding: 0;

            font-family: Arial, Helvetica, sans-serif;
            color: white;
        }

        body{
            background-color: #282a30;

            display: flex;
            justify-content: center;
            align-items: center;

            width: 100vw;
            height: 100vh;
            
            text-align: center;
            color: white;
        }
        #code{
            display: inline-block;
        }
    </style>
    
</head>
<body>

    <div>
        <h1>Your code:</h1>
        <div style="height: 10px;"></div>
        <span id="code"></span>
    </div>

    <script>
        const code = (new URL(window.location.href)).searchParams.get('code') || "no code detected";
        const codeSpan = document.querySelector('#code');
        codeSpan.innerText = code ;
    </script>
</body>
</html>
```
