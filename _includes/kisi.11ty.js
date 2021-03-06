exports.data = {};

exports.render = function (data) {

    return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.first_name} ${data.last_name}</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-400 p-4">
  <a href="../.." class="bg-blue-500 rounded p-2 text-white">Anasayfa</a>
  <div class="flex justify-center items-center mb-4">
   <!-- Start of component -->
   <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg w-full">
      <div id="header" class="flex items-center mb-4"> 
         <img alt="avatar" class="w-20 rounded-full border-2 border-gray-300" src="https://s.gravatar.com/avatar/${this.md5(data.email)}?s=80" />
         <div id="header-text" class="leading-5 ml-6 sm">
            <h4 id="name" class="text-xl font-semibold">${data.first_name} ${data.last_name}</h4>
         </div>
      </div>
      ${data.content}
   </div>
</div>
  </body>
</html>`;
};
