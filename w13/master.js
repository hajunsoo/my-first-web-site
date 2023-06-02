var Body = {
  setColor: function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }

}

var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
    }
  }
}

function nightDayHandler(self){
    var target = document.querySelector('body'); 
    if(self.value == 'day'){
      Body.setColor('black');
      Body.setBackgroundColor('white'); 
      Links.setColor('blue');
      self.value = 'night';
      }
      
    else {
      Body.setColor('white');
      Body.setBackgroundColor('black'); 
      Links.setColor('powderblue');
      self.value = 'day';
    }  
  }
  