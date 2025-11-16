// Smooth scroll
$('nav a').click(function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},700);
});

// Date & Time
setInterval(()=>{document.getElementById('datetime').innerHTML = new Date().toLocaleString();},1000);

// Form validation
$('#submitBtn').click(function(){
  let valid=true;
  $('input, select').removeClass('error');
  if(!$('#name').val()){ $('#name').addClass('error'); valid=false;}
  if(!$('#email').val()){ $('#email').addClass('error'); valid=false;}
  if(!$('#phone').val()){ $('#phone').addClass('error'); valid=false;}
  if(!$('#gender').val()){ $('#gender').addClass('error'); valid=false;}
  if(!$('#level').val()){ $('#level').addClass('error'); valid=false;}
  if($('input[name="interest"]:checked').length===0){ $('input[name="interest"]').parent().css('color','red'); valid=false;} else { $('input[name="interest"]').parent().css('color','inherit');}
  let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if($('#email').val() && !$('#email').val().match(emailPattern)){ $('#email').addClass('error'); valid=false;}
  if(!valid){alert('Please fill in all fields correctly.'); return;}
  alert('Form submitted successfully!');
  location.reload();
});

// Workout Cards Modal
const cards=document.querySelectorAll('.program-card');
const modal=document.getElementById('programModal');
const modalTitle=document.getElementById('modalTitle');
const modalContent=document.getElementById('modalContent');
const closeModal=document.getElementById('closeModal');
cards.forEach(card=>{
  card.addEventListener('click',()=>{
    modalTitle.innerText=card.querySelector('h3').innerText;
    modalContent.innerText=card.getAttribute('data-info');
    modal.style.display='flex';
  });
});
closeModal.addEventListener('click',()=>{ modal.style.display='none'; });
window.addEventListener('click',(e)=>{ if(e.target===modal){ modal.style.display='none'; } });
