 function ScrollTo(element) {
            window.scroll({
                left: 0,
                top: element.offsetTop,
                behavior: 'smooth'
            })
        }

        let button = document.querySelector('.getstarted__page1');
        let feature= document.querySelector('.page2');
        let features=document.querySelector('.features__link');
        let about= document.querySelector('.about__link');
        let price=document.querySelector('.pricing__link');
        let pricing=document.querySelector('.page3');
        let testLink=document.querySelector('.testimonials__link');
        let testimonials=document.querySelector('.page4');
        

        button.addEventListener('click', () => {
            ScrollTo(feature);
        })


        about.addEventListener('click', () => {
            ScrollTo(feature);
        })

        features.addEventListener('click', () => {
            ScrollTo(feature);
        })
        price.addEventListener('click',()=>{
          ScrollTo(pricing);
        })
        testLink.addEventListener('click', ()=>{
          ScrollTo(testimonials);
        })
        btn1LeftPage5.onclick=function(){
          card1.style.border="2px solid #F53838";
          card1.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card2.style.boxShadow="none";
          card3.style.boxShadow="none";
          btn2LeftPage5.style.backgroundColor="#DDE0E4";
          btn3LeftPage5.style.backgroundColor="#DDE0E4";
          btn1LeftPage5.style.backgroundColor="#F53838";
          card2.style.border="2px solid #DDE0E4";
          card3.style.border="2px solid #DDE0E4";
        }
        card1.onclick=function(){
          card1.style.border="2px solid #F53838";
          card1.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card2.style.boxShadow="none";
          card3.style.boxShadow="none";
          btn2LeftPage5.style.backgroundColor="#DDE0E4";
          btn3LeftPage5.style.backgroundColor="#DDE0E4";
          btn1LeftPage5.style.backgroundColor="#F53838";
          card2.style.border="2px solid #DDE0E4";
          card3.style.border="2px solid #DDE0E4";
        }
        btn2LeftPage5.onclick=function(){
          card2.style.border="2px solid #F53838";
          card2.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card1.style.boxShadow="none";
          card3.style.boxShadow="none";
          btn2LeftPage5.style.backgroundColor="#F53838";
          btn1LeftPage5.style.backgroundColor="#DDE0E4";
          btn3LeftPage5.style.backgroundColor="#DDE0E4";
          card1.style.border="2px solid #DDE0E4";
          card3.style.border="2px solid #DDE0E4";
        }
        card2.onclick=function(){
          card2.style.border="2px solid #F53838";
          card2.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card1.style.boxShadow="none";
          card3.style.boxShadow="none";
          btn2LeftPage5.style.backgroundColor="#F53838";
          btn1LeftPage5.style.backgroundColor="#DDE0E4";
          btn3LeftPage5.style.backgroundColor="#DDE0E4";
          card1.style.border="2px solid #DDE0E4";
          card3.style.border="2px solid #DDE0E4";
        }
        btn3LeftPage5.onclick=function(){
          card3.style.border="2px solid #F53838";
          card3.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card1.style.boxShadow="none";
          card2.style.boxShadow="none";
          btn3LeftPage5.style.backgroundColor="#F53838";
          btn1LeftPage5.style.backgroundColor="#DDE0E4";
          btn2LeftPage5.style.backgroundColor="#DDE0E4";
          card1.style.border="2px solid #DDE0E4";
          card2.style.border="2px solid #DDE0E4";
        }
        card3.onclick=function(){
          card3.style.border="2px solid #F53838";
          card3.style.boxShadow="4px 5px 15px rgba(245, 56, 56, 0.35)";
          card1.style.boxShadow="none";
          card2.style.boxShadow="none";
          btn3LeftPage5.style.backgroundColor="#F53838";
          btn1LeftPage5.style.backgroundColor="#DDE0E4";
          btn2LeftPage5.style.backgroundColor="#DDE0E4";
          card1.style.border="2px solid #DDE0E4";
          card2.style.border="2px solid #DDE0E4";
        }
