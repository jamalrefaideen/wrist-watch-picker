import { Directive, ElementRef, Renderer2, OnInit, Output, EventEmitter} from '@angular/core';
import { NgxAnalogWristWatchService } from './ngx-analog-wrist-watch.service';
@Directive({
  selector: '[ngxWristAnalogwristwatch]'
})
export class AnalogwristwatchDirective implements OnInit {
  @Output() timeVal = new EventEmitter<string>();
  internalStyle;
  inlineStyleInfo;
  elementInfo: any = {
    input: null,
    clockBox: null,
    spanToggle: null,
    watchIcon: null,
    label: null,
    labelText: null,
    hourHand: null,
    minuteHand: null,
    secondHand: null,
    clockCrown: null,
    clockSpindle: null,
    clockNum: null,
  };
  timeInfo;
  runClock;
  clockValue;
  constructor(private el: ElementRef, private renderer: Renderer2, private clockService: NgxAnalogWristWatchService) {
   }


   ngOnInit() {
    this.createInitElement();
    this.stylesInInit();
    this.checkIfInputContainValue(this.elementInfo, this.inlineStyleInfo);
    this.watchRunner();
  }


  createInitElement() {
    const label = this.renderer.createElement('label');
    const text = this.renderer.createText('Time');
    const input = this.renderer.createElement('input');
    const clockBox = this.renderer.createElement('div');
    const span = this.renderer.createElement('span');
    const unicodeClock = `\u{0231A}`;
    const icon = this.renderer.createText(unicodeClock);
    this.elementInfo.input = input;
    this.elementInfo.clockBox = clockBox;
    this.elementInfo.spanToggle = span;
    this.elementInfo.watchIcon = icon;
    this.elementInfo.label = label;
    this.elementInfo.labelText = text;
  }

  stylesInInit() {
    this.internalStyle = this.clockService.fetchInternalStyle();
    this.inlineStyleInfo = this.clockService.fetchInLineStyle();
    this.appendTagInInit(this.elementInfo);
    this.applyStyleInInit(this.elementInfo);
    this.applyStyleInFocus(this.elementInfo, this.inlineStyleInfo);
    this.applyStyleInBlur(this.elementInfo, this.inlineStyleInfo);
    this.applyBoxStyle(this.elementInfo);
  }

  watchRunner() {
    this.addClockElement(this.elementInfo.clockBox);
    this.runClock = setInterval(() => {
      const timeInfo = this.startClock();
      this.timeInfo = timeInfo;
    }, 1000);
    this.onWatchBtnClick();
    this.onChangeHourTimeClick();
  }

  appendTagInInit(initElement) {
    const container = this.el.nativeElement;
    this.renderer.setAttribute(initElement.input, 'type', 'text');
    this.renderer.appendChild(initElement.label, initElement.labelText);
    this.renderer.appendChild(initElement.spanToggle, initElement.watchIcon);
    this.renderer.appendChild(container, initElement.label);
    this.renderer.appendChild(container, initElement.input);
    this.renderer.appendChild(container, initElement.spanToggle);
    this.renderer.appendChild(container, initElement.clockBox);
  }

  applyStyleInInit(initElement) {
    this.applyStyleInDivDirective(initElement);
    this.applyStyleInInputAndLabelTag(initElement);
    this.applyStyleInInputAndLabelTag(initElement);
    this.applyStyleInWatchIcon(initElement);
    this.applyStyleInClockBox(initElement);
  }


  applyStyleInDivDirective(initElement) {
    this.el.nativeElement.style.display = this.inlineStyleInfo.display,
    this.el.nativeElement.style.marginBottom = this.inlineStyleInfo.marginbottom,
    this.el.nativeElement.style.marginTop = this.inlineStyleInfo.margintop,
    this.el.nativeElement.style.padding = this.inlineStyleInfo.padding,
    this.el.nativeElement.style.position = this.inlineStyleInfo.relative,
    this.el.nativeElement.style.float = this.inlineStyleInfo.float,
    initElement.input.style.border = this.inlineStyleInfo.border;
  }

  applyStyleInInputAndLabelTag(initElement) {
    initElement.input.style.borderBottom = this.inlineStyleInfo.borderBottom;
    initElement.input.style.outline = this.inlineStyleInfo.outline;
    initElement.input.style.width = this.inlineStyleInfo.width;
    initElement.input.style.fontSize = this.inlineStyleInfo.fontSize;
    initElement.label.style.position = this.inlineStyleInfo.absolute;
    initElement.label.style.color = this.inlineStyleInfo.color;
  }

  applyStyleInWatchIcon(initElement) {
    initElement.spanToggle.style.position = this.inlineStyleInfo.absolute;
    initElement.spanToggle.style.marginLeft = this.inlineStyleInfo.marginLeft;
    initElement.spanToggle.style.cursor = this.inlineStyleInfo.cursor;
    initElement.spanToggle.style.top = this.inlineStyleInfo.iconTop;
    initElement.spanToggle.style.fontSize = this.inlineStyleInfo.iconFontSize;
  }

  applyStyleInClockBox(initElement) {
    initElement.clockBox.style.boxShadow = this.inlineStyleInfo.boxShadow;
    initElement.clockBox.style.width = this.inlineStyleInfo.boxWidth;
    initElement.clockBox.style.height = this.inlineStyleInfo.boxHeight;
    initElement.clockBox.style.justifyContent = this.inlineStyleInfo.justifyContent;
    initElement.clockBox.style.alignItems = this.inlineStyleInfo.alignItems;
    initElement.clockBox.style.display = this.inlineStyleInfo.boxDisplayNone;
  }

  applyStyleInFocus(initElement, style) {
    initElement.input.addEventListener('focus', () => {
      this.floatLabelToTop(initElement, style);
    });
  }

  applyStyleInBlur(initElement, style) {
    initElement.input.addEventListener('blur', () => {
      this.checkIfInputContainValue(initElement, style);
    });
  }

  checkIfInputContainValue(initElement, style) {
    initElement.input.value ? this.floatLabelToTop(initElement, style) : this.floatLabelToBottom(initElement, style);
  }

  floatLabelToTop(elementInfo, style) {
    elementInfo.label.style.top = style.top;
    elementInfo.label.style.fontSize = style.labelFontSize;
    elementInfo.input.style.borderBottom = style.inputBorderBottom;
    elementInfo.label.style.transition = style.transistionTop;
  }

  floatLabelToBottom(elementInfo, style) {
    elementInfo.label.style.top = style.inherit;
    elementInfo.input.style.borderBottom = style.borderBottom;
    elementInfo.label.style.fontSize = style.inherit;
  }

  applyBoxStyle(initElement) {
    this.renderer.listen(initElement.spanToggle, 'click', () => {
      initElement.clockBox.classList.toggle('toggle-time');
    });
  }

  addClockElement(clockBox) {
    const primaryCircle = this.renderer.createElement('div');
    const secondaryCircle = this.renderer.createElement('div');
    const thirdCircle = this.renderer.createElement('div');
    const clockCrown = this.renderer.createElement('div');
    const clockSpindle = this.renderer.createElement('div');
    this.renderer.addClass(clockCrown, 'clock-crown');
    this.renderer.addClass(clockSpindle, 'spindle');
    this.renderer.appendChild(clockBox, primaryCircle);
    this.renderer.appendChild(clockBox, secondaryCircle);
    this.renderer.appendChild(secondaryCircle, thirdCircle);
    this.renderer.appendChild(thirdCircle, clockCrown);
    this.renderer.appendChild(thirdCircle, clockSpindle);
    this.elementInfo.clockCrown = clockCrown;
    this.elementInfo.clockSpindle = clockSpindle;
    this.applyStyleInClockCircle(primaryCircle, secondaryCircle, thirdCircle);
    this.clockService.addClockNumbers(thirdCircle, this.applyStyleInClockNum, this.renderer);
    this.drawClockFace(clockBox);
    this.addClockHands(thirdCircle);
  }


  applyStyleInClockCircle(primaryCircle, secondaryCircle, thirdCircle) {
    primaryCircle.style.width = this.inlineStyleInfo.primaryWidth;
    primaryCircle.style.height = this.inlineStyleInfo.primaryHeight;
    primaryCircle.style.borderRadius = this.inlineStyleInfo.primaryBorderRadius;
    primaryCircle.style.border = this.inlineStyleInfo.primaryBorder;
    primaryCircle.style.position = this.inlineStyleInfo.relative;
    primaryCircle.style.zIndex = '1';

    secondaryCircle.style.width = this.inlineStyleInfo.secondaryWidth;
    secondaryCircle.style.height = this.inlineStyleInfo.secondaryHeight;
    secondaryCircle.style.borderRadius = this.inlineStyleInfo.secondaryBorderRadius;
    secondaryCircle.style.border = this.inlineStyleInfo.secondaryBorder;
    secondaryCircle.style.position = this.inlineStyleInfo.absolute;
    secondaryCircle.style.zIndex = '1';


    thirdCircle.style.width = this.inlineStyleInfo.thirdWidth;
    thirdCircle.style.height = this.inlineStyleInfo.thirdHeight;
    thirdCircle.style.borderRadius = this.inlineStyleInfo.thirdBorderRadius;
    thirdCircle.style.border = this.inlineStyleInfo.thirdBorder;
    thirdCircle.style.position = this.inlineStyleInfo.absolute;
    thirdCircle.style.top = this.inlineStyleInfo.thirdTop;
  }


  applyStyleInClockNum(clockNum, num, style) {
    clockNum.style.position = style.absolute;
    clockNum.style.left = style.clockNum[num].left;
    clockNum.style.top = style.clockNum[num].top;
  }

  drawClockFace(clockBox) {
    const wrapper = this.renderer.createElement('div');
    this.renderer.appendChild(clockBox, wrapper);
    const dugHole = this.clockService.createDugHoles(wrapper, this.renderer);
    const strap = this.clockService.createWatchStraps(wrapper, this.renderer);
    this.applyStyleInDugHoles(dugHole);
    this.applyStyleInWatchStraps(strap);
  }

  applyStyleInDugHoles(dugHole) {
    dugHole.topLeftDugHole.style.position = this.inlineStyleInfo.absolute;
    dugHole.topLeftDugHole.style.width = this.inlineStyleInfo.wrapWidth;
    dugHole.topLeftDugHole.style.borderBottom = this.inlineStyleInfo.wrapBorderBottom;
    dugHole.topLeftDugHole.style.borderLeft = this.inlineStyleInfo.wrapBorderLeft;
    dugHole.topLeftDugHole.style.top = this.inlineStyleInfo.wrapTop;
    dugHole.topLeftDugHole.style.left = this.inlineStyleInfo.wrapLeft;
    dugHole.topLeftDugHole.style.borderBottomRightRadius = this.inlineStyleInfo.rightBorderRightRadius;

    this.renderer.addClass(dugHole.topLeftDugHole, 'top-left-dughole');
    this.renderer.addClass(dugHole.topRightDugHole, 'top-right-dughole');
    this.renderer.addClass(dugHole.bottomLeftDugHole, 'bottom-left-dughole');
    this.renderer.addClass(dugHole.bottomRightDugHole, 'bottom-right-dughole');


    dugHole.topRightDugHole.style.position = this.inlineStyleInfo.absolute;
    dugHole.topRightDugHole.style.width = this.inlineStyleInfo.rightWrapWidth;
    dugHole.topRightDugHole.style.borderBottom = this.inlineStyleInfo.rightWrapBorderBottom;
    dugHole.topRightDugHole.style.borderRight = this.inlineStyleInfo.rightWrapBorderright;
    dugHole.topRightDugHole.style.top = this.inlineStyleInfo.rightWrapTop;
    dugHole.topRightDugHole.style.left = this.inlineStyleInfo.rightWrapLeft;
    dugHole.topRightDugHole.style.margin = this.inlineStyleInfo.rightWrapMargin;
    dugHole.topRightDugHole.style.borderBottomLeftRadius = this.inlineStyleInfo.rightBorderLeftRadius;

    const styleTag = this.renderer.createElement('style');
    const cssText = this.renderer.createText(this.internalStyle);
    this.renderer.appendChild(styleTag, cssText);
    this.renderer.appendChild(document.head, styleTag);
  }

  applyStyleInWatchStraps(strap) {
    const pos = 0;
    for (let index = 0; pos < strap['className' + index].length; index++) {
      const size = strap['className' + index].length;
      if (size === 2) {
        this.renderer.addClass(strap['elementName' + index], strap['className' + index][index - index]);
        this.renderer.addClass(strap['elementName' + index], strap['className' + index][index - (index - 1)]);
        continue;
      } else {
        this.renderer.addClass(strap['elementName' + index], strap['className' + index][index - index]);
        if (index === 17) { break; }
      }
    }
  }


  addClockHands(thirdCircle) {
    const axisCircle = this.renderer.createElement('span');
    const dotPuncture = this.renderer.createElement('i');
    this.renderer.addClass(axisCircle, 'axis-circle');
    this.renderer.addClass(dotPuncture, 'dot-puncture');
    this.renderer.appendChild(axisCircle, dotPuncture);
    const hourHand = this.renderer.createElement('div');
    this.renderer.addClass(hourHand, 'hour-hand');
    this.renderer.addClass(hourHand, 'hour');
    const hourHandRound = this.renderer.createElement('span');
    const hourHandArrow = this.renderer.createElement('span');
    this.renderer.addClass(hourHandRound, 'hour-hand-round');
    this.renderer.addClass(hourHandArrow, 'hour-hand-arrow');
    this.renderer.appendChild(hourHand, hourHandRound);
    this.renderer.appendChild(hourHand, hourHandArrow);
    const secondHand = this.renderer.createElement('div');
    this.renderer.addClass(secondHand, 'second-hand');
    this.renderer.addClass(secondHand, 'hand');
    const minuteHand = this.renderer.createElement('div');
    this.renderer.addClass(minuteHand, 'minute-hand');
    this.renderer.addClass(minuteHand, 'hour');
    this.renderer.appendChild(thirdCircle, axisCircle);
    this.renderer.appendChild(thirdCircle, hourHand);
    this.renderer.appendChild(thirdCircle, secondHand);
    this.renderer.appendChild(thirdCircle, minuteHand);
    this.elementInfo.hourHand = hourHand;
    this.elementInfo.secondHand = secondHand;
    this.elementInfo.minuteHand = minuteHand;
  }


  startClock() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    this.elementInfo.secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = date.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 360;
    this.elementInfo.minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = date.getHours();
    const hourDegrees = hours * 360 / 12 + ((minutes * 360 / 60) / 12);
    this.elementInfo.hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    return {
      hour: hours,
      minute: minutes,
      hourDegree: hourDegrees,
      minuteDegree: minuteDegrees,
    };
  }


  onWatchBtnClick() {
    this.renderer.listen(this.elementInfo.clockCrown, 'click', () => {
      const merdian = this.timeInfo.hour <= 12 || this.timeInfo.hour === 24 ? 'am' : ' pm ';
      this.renderer.setProperty(this.elementInfo.input, 'value', `${this.timeInfo.hour}:${this.timeInfo.minute}${merdian}`);
      this.checkIfInputContainValue(this.elementInfo, this.inlineStyleInfo);
      this.renderer.removeClass(this.elementInfo.clockBox, 'toggle-time');
      this.clockValue = this.elementInfo.input.value;
      this.getClockValue();
    });
  }

  onChangeHourTimeClick() {
    let nextMove = 0;
    this.renderer.listen(this.elementInfo.hourHand, 'click', () => {
      const date = new Date();
      clearInterval(this.runClock);

      nextMove++;
      date.setHours(this.timeInfo.hour, this.timeInfo.minute + nextMove);
      const minutes = date.getMinutes();
      const minuteDegrees = ((minutes / 60) * 360) + 360;

      this.elementInfo.minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
      const hourDegrees = date.getHours() * 360 / 12 + ((date.getMinutes() * 360 / 60) / 12);
      this.elementInfo.hourHand.style.transform = `rotate(${hourDegrees}deg)`;

      const merdian = date.getHours() <= 12 || date.getHours() === 24 ? 'am' : ' pm ';
      this.renderer.setProperty(this.elementInfo.input, 'value', `${date.getHours()}:${minutes}${merdian}`);
      this.checkIfInputContainValue(this.elementInfo, this.inlineStyleInfo);

      const changeTimeInfo = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        hourDegree: hourDegrees,
        minuteDegree: minuteDegrees,
      };
      this.timeInfo = changeTimeInfo;
      this.refreshClock();
    });
  }

  refreshClock() {
    setTimeout( () => {
      setInterval(() => {
        this.timeInfo = this.startClock();
      }, 1000);
    }, 40000);
   }

  getClockValue() {
    this.timeVal.emit(this.clockValue);
  }
}
