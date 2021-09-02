
let searchText;
const getElement=document.getElementById('button-addon2').addEventListener("click",function(){
    searchText = document.getElementById('searchbox').value;
    console.log(searchText);
    search(searchText);
    document.getElementById('searchbox').value="";
    const div=document.createElement('div');
      div.classList.add('col');
});

const search=searchText =>{
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
  .then(response => response.json())
  .then(data => displayBooks(data) );
  

}



const displayBooks=(book)=>{
    const searchResult= document.getElementById('searchResults');
    const numberOfResults=document.getElementById('number');
    if(book.numFound){

        numberOfResults.innerHTML=
    `<h5>Number Of books Found: ${book.numFound} ` ;
    }
    else{
        numberOfResults.innerHTML=
    `<h5> Your Search item is not found in our library ` ;
    }
    
    
    book.docs.forEach(data=> {
       console.log(data);
       //const div=document.createElement('div');
      
      const div=document.createElement('div');
      div.classList.add('col');

      let title;
      if(data.subtitle)
      {
          title=data.title+': '+data.subtitle;
      }
      else{
        title= data.title;
      }

      let authors;
     let counter=0;
      if(data.author_name)
      {
        authors=data.author_name[0]; 

        data.author_name.forEach(author=>{
            counter++;
            if(data.author_name.length>1 && counter==1)
            {
                authors+=', ';
            }
            else if(data.author_name.length==1 && counter==1)
            {
                
            }
            else if(counter==data.author_name.length)
            {
                authors+=author;
            }
           else{
                authors+=author+', ';
            }
        })
      }
      else {
          authors='Unknown Author';
      }

      let publishers;
      counter=0;
      if(data.publisher)
      {
        publishers=data.publisher[0]; 

        data.publisher.forEach(publisher=>{
            counter++;
            if(data.publisher.length>1 && counter==1)
            {
                publishers+=', ';
            }
            else if(data.publisher.length==1 && counter==1)
            {
                
            }
            else if(counter==data.publisher.length)
            {
                publishers+=publisher;
            }
           else{
                publishers+=publisher+', ';
            }
        })
      }
      else {
          publishers='Unknown';
      }
      
      let firstPublishYear;
      if(data.first_publish_year)
      {
        firstPublishYear= data.first_publish_year;
      }
      else{
         firstPublishYear= 'Unknown year :(';
      }
    
      div.innerHTML=`
          <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top h-100" alt="...">
            <div class="card-body">
              <h1 class="card-title">${title}</h1>
              
              <h4 class="card-title">By ${authors}</h4>
              <h6 class="card-title">Publisher(s):  ${publishers}</h6>
              <h6 class="card-title">First Published On ${firstPublishYear}</h6>


              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
      `;
      searchResult.appendChild(div);
        
    });
    // for(var i=0; i<book.numFound; i++){
    //     console.log(book.docs[i]);
    // };
    // for(i in book.docs)
    // {
    //     console.log(book.docs[i]);
    // }
    console.log(book.docs[0].title);
    console.log(book.docs[0].author_name[0]);
}


console.log("djjdjdjd");