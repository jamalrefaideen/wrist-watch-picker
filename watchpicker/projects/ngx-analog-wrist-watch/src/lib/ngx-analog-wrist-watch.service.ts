import { Injectable } from '@angular/core';
const watchStraps = [
  {
    styleClassName: ['strap-primary-top-left', 'border-color']
  },
  {
    styleClassName: ['strap-primary-top-middle', 'border-color']
  },
  {

    styleClassName: ['strap-primary-top-right', 'border-color']
  },
  {

    styleClassName: ['strap-secondary-top-left']
  },
  {

    styleClassName: ['strap-secondary-top-middle']
  },
  {

    styleClassName: ['strap-secondary-top-right']
  },
  {
    styleClassName: ['strap-tertiary-top-left']
  },
  {

    styleClassName: ['strap-tertiary-top-middle']
  },
  {

    styleClassName: ['strap-tertiary-top-right']
  },
  {

    styleClassName: ['strap-primary-bottom-left', 'border-color']
  },
  {

    styleClassName: ['strap-primary-bottom-middle', 'border-color']
  },
  {

    styleClassName: ['strap-primary-bottom-right', 'border-color']
  },
  {
    styleClassName: ['strap-secondary-bottom-left']
  },
  {
    styleClassName: ['strap-secondary-bottom-middle']
  },
  {
    styleClassName: ['strap-secondary-bottom-right']
  },
  {

    styleClassName: ['strap-tertiary-bottom-left']
  },
  {
    styleClassName: ['strap-tertiary-bottom-middle']
  },
  {

    styleClassName: ['strap-tertiary-bottom-right']
  },

];
const dugHoles = ['topLeftDugHole', 'topRightDugHole', 'bottomLeftDugHole', 'bottomRightDugHole'];
const internalStyle =  `
:root {
  --color:#2F4F4F;
  --border-color:black;
  --border-green:green;
  --absolute:absolute;
  --transparent:transparent;
}
span + .toggle-time {
      display:flex!important;
}
div .top-left-dughole::before{
    content: "";
    border-right: 15px solid var(--color);
    position: var(--absolute);
    left: 0px;
    border-top: 16px solid var(--transparent);
    border-bottom: 0px solid var(--color);
    width: 0px;
    bottom: 0px;
}
div .top-right-dughole::before{
  content: "";
  border-left: 15px solid var(--color);
  position: var(--absolute);
  left: 0px;
  border-top: 15px solid var(--transparent);
  border-bottom: 0px solid var(--color);
  bottom: 0px;
}

div .strap-primary-top-left {
    position: var(--absolute);
    left: 42%;
    top: 31%;
    height: 40px;
    background:var(--color);
    margin: 3px;
    width: 25px;
}

div .border-color{
    box-shadow: 0px 0px 1px 1px var(--border-green);
}

div .strap-primary-top-middle{
    position: var(--absolute);
    left: 47%;
    top: 30%;
    height: 40px;
    background:var(--color);
    margin: 1px;
    width: 38px;
}

div .strap-primary-top-right {
    position: var(--absolute);
    left: 53%;
    top: 201px;
    height: 42px;
    background:var(--color);
    width: 25px;
    margin: 6px;
}

div .bottom-left-dughole{
   position: var(--absolute);
   width: 15px;
   border-top: 54px solid rgb(47, 79, 79);
   border-left: 16px solid white;
   top: 64%;
   left: 37%;
}

div .bottom-left-dughole::before{
    content: "";
    border-right: 15px solid var(--color);
    position: var(--absolute);
    left: 0px;
    border-top: 0px solid var(--color);
    border-bottom: 14px solid var(--transparent);
    width: 0px;
}

div .strap-primary-bottom-left {
    position: var(--absolute);
    left: 42%;
    top: 444px;
    height: 35px;
    background:var(--color);
    margin: 3px;
    width: 25px;
}

div .strap-primary-bottom-middle{
    position: var(--absolute);
    left: 47%;
    top: 67%;
    height: 40px;
    background:var(--color);
    margin: 1px;
    width: 38px;
}

div .strap-primary-bottom-right {
    position: var(--absolute);
    left: 55%;
    top: 440px;
    height: 44px;
    background:var(--color);
    width: 25px;
    margin: -4px
}

div .bottom-right-dughole{
  position: var(--absolute);
  width: 15px;
  border-top: 61px solid rgb(47, 79, 79);
  border-right: 16px solid white;
  top: 408px;
  left: 57%;
  margin: 11px;
  border-top-left-radius: 19px;
}
div .bottom-right-dughole::before{
    content: "";
    border-left: 15px solid var(--color);
    position: var(--absolute);
    left: 0px;
    border-top: 0px solid var(--color);
    border-bottom: 14px solid var(--transparent);
    width: 0px;
}
 div .strap-secondary-top-left{
    top: 133px;
    left: 241px;
    position: var(--absolute);
    width: 20px;
    height: 30px;
    border-bottom: 43px solid var(--color);
    border-left: 4px solid var(--transparent);
}

div .strap-secondary-top-middle{
    top: 150px;
    left: 265px;
    position: var(--absolute);
    width: 40px;
    height: 48px;
    background-color:var(--color);
    box-shadow: 0px 0px 0px 1px var(--border-green);
}

div .strap-secondary-top-right{
    top: 132px;
    left: 306px;
    position: var(--absolute);
    width: 20px;
    height: 29px;
    border-bottom: 43px solid var(--color);
    border-right: 4px solid var(--transparent);
}


div .strap-tertiary-top-left{
  top: 88px;
  left: 241px;
  position: var(--absolute);
  width: 20px;
  height: 30px;
  border-bottom: 43px solid var(--color);
  border-left: 4px solid var(--transparent);
}

div .strap-tertiary-top-middle{
  top: 100px;
  left: 265px;
  position: var(--absolute);
  width: 40px;
  height: 48px;
  background-color:var(--color);
  box-shadow: 0px 0px 0px 1px var(--border-green);
}

div .strap-tertiary-top-right{
  top: 87px;
  left: 306px;
  position: var(--absolute);
  width: 20px;
  height: 29px;
  border-bottom: 43px solid var(--color);
  border-right: 4px solid var(--transparent);
}

div .strap-secondary-bottom-left{
  top: 485px;
  left: 241px;
  position: var(--absolute);
  width: 20px;
  height: 30px;
  border-top: 43px solid var(--color);
  border-left: 4px solid var(--transparent);
}


div .strap-secondary-bottom-middle{
    top: 485px;
    left: 265px;
    position: var(--absolute);
    width: 40px;
    height: 48px;
    background-color:var(--color);
    box-shadow: 0px 0px 0px 1px var(--border-green);
}

div .strap-secondary-bottom-right{
  top: 483px;
  left: 306px;
  position: var(--absolute);
  width: 20px;
  height: 30px;
  border-top: 45px solid var(--color);
  border-right: 4px solid var(--transparent);
}

div .strap-tertiary-bottom-left{
  top: 530px;
  left: 241px;
  position: var(--absolute);
  width: 20px;
  height: 30px;
  border-top: 43px solid var(--color);
  border-left: 4px solid var(--transparent);
}

div .strap-tertiary-bottom-middle{
  top: 530px;
  left: 265px;
  position: var(--absolute);
  width: 40px;
  height: 48px;
  background-color:var(--color);
  box-shadow: 0px 0px 0px 1px var(--border-green);
}

div .strap-tertiary-bottom-right{
  top: 530px;
  left: 306px;
  position: var(--absolute);
  width: 20px;
  height: 30px;
  border-top: 45px solid var(--color);
  border-right: 4px solid var(--transparent);
}

div .hour-hand {
   border: 1px solid var(--border-color);
    position: var(--absolute);
    top: 61px;
    height: 40px;
    left: 82px;
    width: 5px;
}

div .hour-hand::before {
  position: var(--absolute);
  content: "";
  border-radius: 50%;
  width: 15px;
  height: 15px;
  border: 1px solid var(--border-color);
  top: -17px;
  left: -6px;
}

div .second-hand{
    position: var(--absolute);
    width: 112px;
    border-bottom: 1px solid black;
    left: 10px;
}
div .second-hand::after {
  content: "";
  width: 10px;
  background: var(--border-color);
  height: 10px;
  position: var(--absolute);
  left: 111px;
  top: -5px;
  border-radius: 50%;
}

div .second-hand::before {
  content: "";
  width: 15px;
  background: var(--border-color);
  height: 15px;
  position: var(--absolute);
  left: 23px;
  top: -7px;
  border-radius: 50%;
  background-image: radial-gradient(circle, black, white, black);
}

div .minute-hand {
    border: 1px solid var(--border-color);
    position: var(--absolute);
    top: 51px;
    height: 50px;
    left: 85px;
    width: 5px;
}

div .minute-hand::before {
    position: var(--absolute);
    content: "";
    border-right: 4px solid var(--transparent);
    border-left: 3px solid var(--transparent);
    top: -24px;
    left: -1px;
    border-bottom: 23px solid var(--border-color);
}

div .hour-hand-round {
  position: var(--absolute);
  height: 9px;
  border-left: 1px solid var(--border-color);
  left: 35%;
  top: -10px;
}

div .hour-hand-round::before {
    position: var(--absolute);
    content: "";
    height: 7px;
    border-left: 1px solid var(--border-color);
    right: 3px;
    top: -5px;
    transform: rotate(120deg);
}

div .hour-hand-round::after {
    position: var(--absolute);
    content: "";
    height: 7px;
    border-left: 1px solid var(--border-color);
    left: 2px;
    top: -5px;
    transform: rotate(63deg);
}

div .hour-hand-arrow{
  position: var(--absolute);
  content: "";
  border-right: 6px solid var(--transparent);
  border-left: 6px solid var(--transparent);
  top: -31px;
  left: -4px;
  border-bottom: 15px solid var(--border-color);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

div .hour {
    transform-origin: 70% 85%;
    transition: all 0.05s;
    transform: rotate(90deg);
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

div .hand {
  top: 51%;
  position: var(--absolute);
  transform-origin: 70%;
  transition: all 0.05s;
  transform: rotate(90deg);
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

div .axis-circle {
  height: 10px;
  width: 10px;
  border: 5px solid var(--border-color);
  border-radius: 50%;
  position: var(--absolute);
  top: 85px;
  left: 78px;
  background-color: var(--border-color);
  z-index:1;
 }

div .axis-circle .dot-puncture {
  z-index: 1;
  width: 6px;
  background: silver;
  height: 6px;
  position: var(--absolute);
  left: 2px;
  top: 2px;
  border-radius: 50%;
 }
 div .clock-crown {
  position :absolute;
  left:201px;
  top:51%;
  transform: rotate(90deg);
  z-index:1;
 }
 div .clock-crown::before {
  content:"";
  position :var(--absolute);
  width: 10px;
  height: 0;
  border-left: 2px solid var(--transparent);
  border-right: 2px solid var(--transparent);
  border-bottom: 10px solid var(--color);
  top:-10px;
  left:-1px;
 }
 div  .spindle {
  position :absolute;
  left:216px;
  top:49%;
  transform: rotate(90deg);
  transition:all 2s;

 }
 div .spindle::after {
  content: "";
  position: var(--absolute);
  width: 4px;
  left: 8px;
  border-bottom: 14px solid var(--color);
  opacity:0
 }

 div .spindle-move::after {
   opacity:1;

 }

 div .clock-crown-drag {
   left:215px;
 }
 div .change-hour {
    transform-origin: 70% 85%;
    transition: all 0.05s;
    transform: rotate(90deg);
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
 }
`;
@Injectable({
  providedIn: 'root'
})
export class NgxAnalogWristWatchService {
  CLOCK_NUMBER = 12;
  inlineStyleInfo: any = {
    border: 'none',
    borderBottom: '2px solid teal',
    inputBorderBottom: '2px solid blue',
    outline: 'none',
    color: 'blue',
    fontSize: '18px',
    labelFontSize: '14px',
    left: '10px',
    bottom: '10px',
    relative: 'relative',
    absolute: 'absolute',
    display: 'inline-block',
    marginbottom: '25px',
    float: 'left',
    marginright: '25px',
    padding: '2rem',
    top: '15px',
    width: '250px',
    boxShadow: '#ded9d9 0px 3px 4px',
    boxWidth: '500px',
    boxHeight: '575px',
    inherit: 'inherit',
    transistionTop: 'top 2s cubic-bezier(0.53, 0.49, 0.35, 0.39) 0s',
    marginLeft: '-15px',
    iconTop: '24px',
    iconFontSize: '20px',
    boxDisplayNone: 'none',
    boxDisplayFlex: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    primaryWidth: '202px',
    primaryHeight: '202px',
    primaryBorderRadius: '50%',
    primaryBorder: '10px solid var(--color)',
    secondaryWidth: '193px',
    secondaryHeight: '193px',
    secondaryBorderRadius: '50%',
    secondaryBorder: '6px solid gray',
    thirdWidth: '184px',
    thirdHeight: '185px',
    thirdBorderRadius: '50%',
    thirdBorder: '5px solid var(--border-color)',
    thirdTop: '-1px',
    numLeft: '133px',
    numTop: '14px',
    clockNum: [
      {
        left: '130px',
        top: '18px'
      },
      {
        left: '160px',
        top: '49px',
      },
      {
        left: '165px',
        top: '89px',
      },
      {
        left: '151px',
        top: '128px',
      },
      {
        left: '125px',
        top: '153px',
      },
      {
        left: '86px',
        top: '162px',
      },
      {
        left: '49px',
        top: '153px',
      },
      {
        left: '19px',
        top: '127px',
      },
      {
        left: '7px',
        top: '89px',
      },
      {
        left: '13px',
        top: '48px',
      },
      {
        left: '39px',
        top: '20px',
      },
      {
        left: '81px',
        top: '3px',
      }
    ],
    beltTop: '-143px',
    beltLeft: '85px',
    beltWidth: '38px',
    beltHeight: '48px',
    beltBackgroundColor: '#2F4F4F',
    wrapWidth: '15px',
    wrapBorderBottom: '54px solid var(--color)',
    wrapBorderLeft: '16px solid white',
    wrapLeft: '37%',
    wrapTop: '207px',
    rightWrapWidth: '15px',
    rightBorderRightRadius: '9px',
    rightWrapBorderBottom: '63px solid var(--color)',
    rightWrapBorderright: '16px solid white',
    rightWrapLeft: '60%',
    rightWrapTop: '32%',
    rightWrapMargin: '-7px',
    rightBorderLeftRadius: '10px',
  };
  watchElements = ['label', 'input', 'span', 'primaryCricle',
    'secondaryCircle', 'teritaryCircle', 'clockBox', 'hourHand', 'minuteHand', 'secondHand'];

  constructor() { }

  fetchInternalStyle() {
    return internalStyle;
  }

  fetchInLineStyle() {
    return this.inlineStyleInfo;
  }


  createDugHoles(wrapper, renderer) {
    const styleToDugHole = {};
    dugHoles.forEach(dugHole => {
      const dugHol = renderer.createElement('span');
      renderer.appendChild(wrapper, dugHol);
      styleToDugHole[dugHole] = dugHol;
    });
    return styleToDugHole;
  }

  createWatchStraps(wrapper, renderer) {
    const styleToWatchStrap = {};
    watchStraps.forEach((watchStrap, index) => {
      const strap = renderer.createElement('span');
      renderer.appendChild(wrapper, strap);
      styleToWatchStrap['elementName' + index] = strap;
      styleToWatchStrap['className' + index] = watchStrap.styleClassName.map(className => {
        return className;
      });
    });
    return styleToWatchStrap;
  }

  addClockNumbers(thirdCircle, applyStyleInClockNum, renderer) {
    for (let pos = 0; pos < this.CLOCK_NUMBER; pos++) {
      const numSpan = renderer.createElement('span');
      const num = renderer.createText((pos + 1).toString());
      renderer.appendChild(numSpan, num);
      renderer.appendChild(thirdCircle, numSpan);
      renderer.setProperty(numSpan, '[timeChange]', 'onNumClick()');
      applyStyleInClockNum(numSpan, pos, this.inlineStyleInfo);
    }
  }

}


