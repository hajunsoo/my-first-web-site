function nightDayHandler(self){
var target = document.querySelector('body');      
        if(self.value == 'day'){
          target.style.backgroundColor = 'white';
          target.style.color = 'black';
          console.log(self);
          if(self.id == 'night_day_1'){
            self.value = 'night';
          document.querySelector('#night_day_2').value = 'night';
          }else{
            self.value = 'night';
          document.querySelector('#night_day_1').value = 'night';
          }
        
        } else {
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          if(self.id == 'night_day_1'){
            self.value = 'day';
          document.querySelector('#night_day_2').value = 'day';
          }else{
            self.value = 'day';
          document.querySelector('#night_day_1').value = 'day';
          }
        }
    }