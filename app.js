const ratingNumbers = document.querySelectorAll('.rating-number');
const submitBtn = document.getElementById('submit-btn');
const thankYouContainer = document.getElementById('thankyou-container');
const ratingContainer = document.getElementById('rating-container');
const ratedNumber = document.getElementById('rated-number');
console.log(ratingNumbers);
let feedback;
//get the feedback rating
ratingNumbers.forEach(btn => {
    btn.addEventListener('click',(e)=>{   
        feedback = e.srcElement.id.slice(e.srcElement.id.length-1) ;
        
    })
});

//submit 
submitBtn.addEventListener('click',()=>{
    ratingContainer.classList.add('hidden');
    thankYouContainer.classList.remove('hidden');
    ratedNumber.textContent = feedback;
})

