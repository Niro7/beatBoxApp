/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
  constructor(audioSrc) {
    this.audioSrc = new Audio(audioSrc);
    // console.log(this.audioSrc);
  }
  playKey = () => {
    this.audioSrc.currentTime = 0;
    this.audioSrc.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML(color);
    this.setTransitionEndListener();
  }
  /**
   * Set transitionend listener to remove the box-shadow & background
   */
  setTransitionEndListener = () => {
    this.element.addEventListener('transitionend', () => {
      this.deselect();
    })
  }
  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = (color) => {
    this.element.style.borderColor = color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  };
}
