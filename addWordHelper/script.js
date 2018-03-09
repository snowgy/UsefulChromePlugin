
    document.addEventListener("dblclick",translate);

    function translate(e){
        var e = e || window.event.target;
        var word = window.getSelection().toString();    //利用getSelection()方法取词
        if(word.charAt(0)>='A'&&word.charAt(0)<='Z'){
            word = word.substr(1);
        }
        var add = 'http://www.shanbay.com/api/learning/add/'+word;
        var meaning = 'https://api.shanbay.com/bdc/search/?word='+word;
        var con;
        var xhr = new XMLHttpRequest();
        xhr.open('get',meaning,true);
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                var text = xhr.responseText;
                var json = eval("("+text+")");
                var meaning = json.data.definition;
                alert(meaning);
                con = confirm("Do you want to add "+"\""+word+"\""+" to your wordlist?");
                var xhr2 = new XMLHttpRequest();
                if(con==true){
                    xhr2.open('get',add, true);
                }
                xhr2.send(null); 
                }
            }
        
       xhr.send(null);
       
    }
        
    
