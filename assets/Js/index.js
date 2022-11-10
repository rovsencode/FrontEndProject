const infoBtn = document.querySelectorAll(".info-btn");
const infoText = document.querySelectorAll(".info-text");
const num96 = document.querySelector(".num-96");


// console.log(num96.innerText);
// function num(number) {
//     for ( let num = 0; num <=96; num++) {
//         number.innerHTML = num;   
//         console.log(number.innerHTML);
// }
// }
// setTimeout(num(num96),100000)
// function ready() {
//  num(num96);
// }
// setTimeout(ready,3000)
// num(num96);

infoBtn.forEach((btn) => {
    btn.addEventListener("click", () => { 
        let dataId = btn.getAttribute("data-id");
        // console.log(dataId);
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
        else {
            btn.classList.add("active");
       }
       if (btn.classList.contains("active")) {
           infoText.forEach((info) => {
               if (info.id === dataId) {
                   info.classList.remove("d-none")
                }
            })
          
        }
        else {
            infoText.forEach((info) => {
                if (info.id === dataId) {
                    info.classList.add("d-none")
                }
            })
        }
    })
})


 jQuery({ Counter: 0 }).animate({ Counter: $(".num-96").text() }, {
  duration: 1500,
  easing: 'swing',
  step: function () {
    $(".num-96").text(Math.ceil(this.Counter));
     }
 })
    jQuery({ Counter: 0 }).animate({ Counter: $(".num-190").text() }, {
  duration: 1500,
  easing: 'swing',
  step: function () {
    $(".num-190").text(Math.ceil(this.Counter));
     }
    })
   $({ Counter: 0 }).animate({ Counter: $(".num-12").text() }, {
  duration: 1500,
  easing: 'swing',
  step: function () {
    $(".num-12").text(Math.ceil(this.Counter));
     }
    })
    $({ Counter: 0 }).animate({ Counter: $(".num-46").text() }, {
  duration: 1500,
  easing: 'swing',
  step: function () {
    $(".num-46").text(Math.ceil(this.Counter));
     }
    })
const btnSelect = document.querySelectorAll(".btn-select");
btnSelect.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("siz artiq planivizi secdiz ,resmilesdirmek ucun qeydiyyatdan keciniz")
    })
})

const comments = document.querySelector(".comments");
const commentInput = document.querySelector("#comment");
const submitBtn = document.querySelector(".submit-comment");
const username = document.querySelector("#name");
submitBtn.addEventListener("click", () => {
    comments.innerHTML+=`        <div class="comment">
                <div class="header-comment">
                  <img src="./assets/images/blog/person.png" alt="person" />
                  <span class="name">${username.value}</span>
           <div class="reply" > 
              <i class="fa fa-reply"></i>
               <button class="btn  reply-btn">reply</button>
               </div>
                </div>
                <div class="comment-text">
                 <p >${commentInput.value}</p>
                </div>
              </div>`
    
}
)
const replyBtn = document.querySelector(".reply-btn");
replyBtn.addEventListener("click", () => {
    
})

                        
              
                
          
