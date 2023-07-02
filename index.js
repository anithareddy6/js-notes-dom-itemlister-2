


//adding items in text box and displaying it under items
//grab the element(s1)

var form=document.getElementById('addForm');
var item=document.getElementById('items');
var filter=document.getElementById("filter")
//form submit event

form.addEventListener('submit',addItem);//in that textarea(form),we added event listener,when we submit, additem is a function which perform our mentioned stuffs
//delete or remove event
item.addEventListener('click' ,removeItem);

//filter event
filter.addEventListener('keyup',filteritems)

//add item
function addItem(e){
e.preventDefault();

//get input value of entered text to display in item after we entered 
var newitem = document.getElementById('item').value;

//create new li element
var li=document.createElement("li")
//add class inside li
li.className="list-group-item";
//add and create text node with input value inside li
li.appendChild(document.createTextNode(newitem));


//create delete button
var deleteBtn =document.createElement("button");
//add class inside del button
deleteBtn.className="btn btn-danger btn-sm float-right delete";
//add or append and create textnode
deleteBtn.appendChild(document.createTextNode('X'))
//finally add del btn to li
li.appendChild(deleteBtn)
//finally add that input value to item
 item.appendChild(li)
}

 //remove item
 function removeItem(e){//remove function performs
if(e.target.classList.contains('delete')){//if we delete
if(confirm('are you sure?')){//it will popup
    var li=e.target.parentElement;//if yes then it will target parent element(which is li)
    item.removeChild(li);//it will remove li which we are deleting  which is in inside item
 
}
}
 }

 //filter items
 function filteritems(e){//filterfunction performsm,event(e)parameter is must for all funtion ,then only it will target and perform stuffs.it generally used to target the text entered by user
    //convert text into lowercase
    var text=e.target.value.toLowerCase();//it will target the text and convert it into lowercase
   //get all li
   var items = item.getElementsByTagName('li');
   //it first converts all items(li) into array and  and using foreach method ,the function  take each item and perform below operations
   Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;//it takes textcontent of firstchild and it used for comparision
//it checks if the text entered by user is present in list item or not. The text of list item is converted to lowercase & then check for the index of the text entered by the user. 
//If the index is not -1, meaning it is present in the item then it returns true else false.
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display="block";//it show whichever item matches
    }else{
        item.style.display="none"//it will display nothing
    }
   });
 }


