const button = document.querySelectorAll('.Button')
//console.log(button);

 const body = document.querySelector('body')

  button.forEach(function(Button){

//      console.log(Button);
     Button.addEventListener('click',function(sid){
//         console.log(sid);
//         console.log(sid.target);
        // if (sid.target.id==='black') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='blue') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='pink') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='green') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='red') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='yellow') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='grey') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='white') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='brown') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        //  if (sid.target.id==='purple') {
        //     body.style.backgroundColor=sid.target.id;
        // }
        
           const colorId = sid.target.id;
        switch (colorId) {
            case 'black':
               body.style.backgroundColor='black';
                
                break;
                case 'blue':
               body.style.backgroundColor='blue';
                
                break;
                case 'pink':
               body.style.backgroundColor='pink';
                
                break;
                case 'green':
               body.style.backgroundColor='green';
                
                break;
                case 'red':
               body.style.backgroundColor='red';
                
                break;
                case 'yelow':
               body.style.backgroundColor='yelow';
                
                break;
                case 'grey':
               body.style.backgroundColor='grey';
                
                break;
                case 'white':
               body.style.backgroundColor='white';
                
                break;
                 case 'brown':
               body.style.backgroundColor='brown';
                
                break;
                 case 'purple':
               body.style.backgroundColor='purple';
                
                break;
                
        
            default:
                break;
        }
     })
    
})