/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
    constructor(audioSrc) {
      this.audioSrc = new Audio(audioSrc)
    }
    playKey= () => {
        return this.audioSrc.play();
    }
}
let song = new Beat("./assets/Musical Orches 4.mp3")
console.log(song.playKey());
/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {}

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {};

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {};

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {};
}
