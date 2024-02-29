LINK - https://www.youtube.com/watch?v=kjohGEZjco8&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=9
https://learnersbucket.com/examples/interview/capture-product-visible-on-viewport-when-user-stops-scrolling/
--------------------------------------------------------------------------------------------------------------------------------------
SCRIPT 
// first use conditions to get elements in viewport this will be on debounce
// debounce scroll event

const block = document.querySelector(".blocks");

const inVIewPort = (ele) => {
  const dim = ele.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return dim.top > 0 && dim.bottom < viewHeight && dim.left > 0 && dim.right < viewWidth ;
}

const detect = () => {
  const result = [];
  const blocks = document.querySelectorAll('.blocks');
  blocks.forEach((ele) => {
    if(inVIewPort(ele)){
      result.push(ele.textContent);
    }
  });
  console.log(result);
}

const debounce = (func, delay) => {
  let inDebounce ;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => {
      func.apply(context,args)
    }, delay)
  }
}
const debounceDetect = debounce(detect, 1500);
window.addEventListener('scroll',debounceDetect ,false)
// console.log(block.getBoundingClientRect());
------------------------------------------------------------------------------------------------------------------------------
HTML

<main class='wrapper'>
  <div class='blocks'>1</div>
  <div class='blocks'>2</div>
  <div class='blocks'>3</div>
  <div class='blocks'>4</div>
  <div class='blocks'>5</div>
  <div class='blocks'>6</div>
  <div class='blocks'>7</div>
  <div class='blocks'>8</div>
  <div class='blocks'>9</div>
  <div class='blocks'>10</div>
  <div class='blocks'>11</div>
  <div class='blocks'>12</div>
  <div class='blocks'>13</div>
  <div class='blocks'>14</div>
  <div class='blocks'>15</div>
  <div class='blocks'>16</div>
  <div class='blocks'>17</div>
  <div class='blocks'>18</div>
  <div class='blocks'>19</div>
  <div class='blocks'>20</div>
  <div class='blocks'>21</div>
  <div class='blocks'>22</div>
  <div class='blocks'>23</div>
  <div class='blocks'>24</div>
  <div class='blocks'>25</div>
  <div class='blocks'>26</div>
  <div class='blocks'>27</div>
</main>

----------------------------------------------------------------------------------------------------------------------------------------------
CSS

.wrapper {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.blocks {
  background-color: red;
  margin:2px;    
  font-size: 30px;
  text-align:center;
}
