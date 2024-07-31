//counter number

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.word');
    
    counters.forEach(counter => 
      {
      const target = parseInt(counter.getAttribute('data-target'));
      const updateCount = () => {
        const count = parseInt(counter.innerText);
        const increment = target / 200;
        
        if (count < target) 
        {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCount();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.word1');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const updateCount = () => {
        const count = parseInt(counter.innerText);
        const increment = target / 200;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCount();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.word2');
    
    counters.forEach(counter =>  {
      const target = parseInt(counter.getAttribute('data-target'));
      const updateCount = () => {
        const count = parseInt(counter.innerText);
        const increment = target / 200;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      
       updateCount();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.word3');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const updateCount = () => {
        const count = parseInt(counter.innerText);
        const increment = target / 200;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCount();
    });
  });



 

 

  