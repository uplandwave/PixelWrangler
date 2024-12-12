<div class="indicator-container">
  <div class="top-part">
    <div class="arm"></div>
    <div class="spacer"></div>
  </div>
  <div class="bottom-part"></div>
</div>

<style>
  /* using code from:
  * https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes 
  * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
  * https://developer.mozilla.org/en-US/docs/Web/CSS/animation
  */

  .indicator-container {
    margin: 20px auto;
    position: relative;
    width: 87px;
    height: 80px;
  }
  .top-part {
    position: absolute;
    left: 0px;
    top: 35px;
    animation: 0.25s ease-in 0s infinite alternate and-action;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: var(--Accent_1);
    .arm {
      width: 80px;
      height: 15px;
      background-color: var(--Accent_1);
      position: absolute;
      left: 7px;
      top: -7px;
      border-radius: 5px 5px 0 0;
    }
  }
  .bottom-part {
    position: absolute;
    background-color: var(--Accent_1);
    width: 80px;
    height: 40px;
    bottom: 0;
    left: 7px;
    border-radius: 0 0 5px 5px;
  }

  @keyframes and-action {
    0% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
