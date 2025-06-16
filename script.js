function rondom_quotes(){
    var quote = ["<p>“Be yourself; everyone else is already taken.”</p>","<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>","<p>“Be the change that you wish to see in the world.”</p>","<p>“You only live once, but if you do it right, once is enough.”</p>","<p>“To live is the rarest thing in the world. Most people exist, that is all.”</p>","<p>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</p>","<p>“It is better to be hated for what you are than to be loved for what you are not.”</p>","<p>“Do what you can, with what you have, where you are.”</p>","<p>“One good thing about music, when it hits you, you feel no pain.”</p>"];
    var writer = ["<span>― Oscar Wilde</span>","<span>― Albert Einstein</span>","<span>― Mahatma Gandhi</span>","<span>― Mae West</span>","<span>― Oscar Wilde</span>","<span>― Mahatma Gandhi</span>","<span>― Andre Gide, Autumn Leaves</span>","<span>― Theodore Roosevelt</span>","<span>― Bob Marley</span>"];
  
    var mr= Math.random()*writer.length;
    var num = Math.floor(mr);
  
    document.getElementById("quotes").innerHTML=quote[num];
    document.getElementById("writer").innerHTML=writer[num];
}