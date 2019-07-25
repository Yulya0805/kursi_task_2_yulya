let names = [];

getListOfNames = function() {
   let list = '';
   for(name of names)
    list += `<li>${name}</li>`
   return list;
 };

rerenderList = function() {
   let list;
   if (names.length < 0)
     return document.getElementById("block-list-ul").outerHTML = "";
     
   list = getListOfNames();
   let blockListUlElement = document.getElementById("block-list-ul");
   if (blockListUlElement !== null)
       return blockListUlElement.innerHTML = list;
   
   let blockDivUlElement = document.getElementById("block-list");
   return blockDivUlElement.innerHTML = `<ul id="block-list-ul">${list}</ul>`;
};
     
    
const insertName = function() {
   let nameElement = document.getElementById('name');
   let name = nameElement.value;
   if (name === '')
      return;
   names.push(name);
   return rerenderList();
};
     
    
const deleteName = function() {
   names = [];
   let nameElement = document.getElementById('name');
   nameElement.value = '';
   rerenderList();
};
     