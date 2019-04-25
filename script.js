

//profile and +chags
const profile = document.querySelector('#profile');
const chagsMobile = document.querySelector('#chags-mobile');
const mobileProfile = document.querySelector('.mobile-profile');
const mobileChags = document.querySelector('.mobile-chags');
const bg = document.querySelector('.bg');
const bc = document.querySelector('.bc');


events();
function events(){
  profile.addEventListener('click',showProfile);
  bg.addEventListener('click',closePop);
  bc.addEventListener('click',closeChag);
  chagsMobile.addEventListener('click',showChags);
}


//functions
function showProfile(){
  mobileProfile.style.display = 'block';
}
function showChags(){
  mobileChags.style.display = 'block';
}
function closePop(){
  if(mobileProfile.style.display = 'block'){
    mobileProfile.style.display = 'none';
  }
}
function closeChag(){
  if(mobileChags.style.display = 'block'){
    mobileChags.style.display = 'none';
  }
}

//join chag ul
const selectChag = document.querySelector('.select-chag');
const chagList = document.querySelector('.right ul');
const currentChag = document.querySelector('#current-chag');
const whatDay = document.querySelector('#what-day');

chagList.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON'){
    let chag = event.target.previousElementSibling.textContent;
    let option = document.createElement('option');
    let theDays = event.target.previousElementSibling;
    let dd = theDays.children[0];
    selectChag.appendChild(option);
    option.textContent = chag;
    currentChag.textContent = chag;
    whatDay.textContent = '- days 1/' + dd.textContent;
  }
});

//set new chags
const setForm = document.querySelector('.set-chag');
const setFormInput = document.querySelector('#set-chag-input');
const setFormSelect = setForm.querySelector('select');

setForm.addEventListener('click',(event) => {
  if(event.target.tagName == 'BUTTON'){
    let chag = setFormInput.value;
    let option = document.createElement('option');
    selectChag.appendChild(option);
    option.textContent = chag;
    currentChag.textContent = chag;
    let dd = setFormSelect.value;
    whatDay.textContent = '- days 1/' + dd;
  }
});

//chag it!!!!
const chagIt =  document.querySelector('.new-chag');
const chagAll =  document.querySelector('.chags');

chagIt.addEventListener('click',(event) => {
  event.preventDefault;
  if(event.target.classList.contains('post-button')){
    //  selecting all the inputs
      let chagForm = event.target.parentNode;

      const chagItems = {
        text : chagForm.querySelector('input').value,
        select : chagForm.querySelector('select').value,
        image : document.querySelector('#person').src,
        name : document.querySelector('.profile h3').textContent,
      }

      makeChag(chagItems);
  }

  function makeChag(chagItems){
    let postedChag = document.createElement('div');
    let vv = chagAll.children.previousElementSibling;
    postedChag.innerHTML = `
                <div class="posted-chag">

                  <img src="${chagItems.image}"/>
                  <h4>${chagItems.name}</h4>
                  <p><span id="hashtag">${selectChag.value}</span> <br> ${chagItems.text}</p>
                  <button type="button" name="button" id="thumbs-up"><i class="fa fa-thumbs-up"></i></button>
                  <span id="likes">1</span>
                </div>
    `;

    chagAll.insertBefore(postedChag,chagAll.firstChild);
  }
 });


const post = document.querySelector('.posted-chag');
const likeButton = post.querySelector('#thumbs-up');
const likes = post.querySelector('#likes');

post.addEventListener('click', (event) => {
  if(event.target = likeButton){
    console.log(likeButton);
  }
});

// let numberOfLikes = parseInt(likes.textContent);
// numberOfLikes++;
// likes.textContent = numberOfLikes;
