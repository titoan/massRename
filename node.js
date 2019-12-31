const fs = require('fs');
const path = require('path');

// Получаем массив(строк) имен всех файлов в директории
fs.readdir('img-ex', (err, files) =>{
   if(err) throw err

for(let i = 0; i < files.length; i++ ){
      // Получаем путь расположения каждого элемента
      // Первый аргумент - родительская директория; Второй - имя файла
   let pathToFile = path.resolve('img-ex', files[i]);
  
   let pathToDir = path.dirname(pathToFile);
  
      // Если вторым аргументом передать просто новое имя файла, то файл после переименования будет перемещён в корневую директорию(не совсем очевидная херня, однако)
       fs.rename(`${pathToFile}`, `${pathToDir}/smerd-${i + 81}.jpg`, (err)=>{
       if(err) throw err
       console.log('File renamed successfully!');
   })
}

});
