class TextStatistics{constructor(t){this._allWords=null,this._allSentences=null,this._text=t,this._normalizedText=this.normalizeText(t)}updateText(t){this._text=t,this._normalizedText=this.normalizeText(t),this._allSentences=null,this._allWords=null}normalizeText(t){return t=(t=(t=(t=t.replace(/([a-zèéêáàâ0-9])['’`´‘]([a-z])/gi,"$1$2")).replace(/[\-_–"“”„'’`´‘˚^°\+\*\.\!\?…\:,;=\)\(\[\]%¡¿‽#<>•\/]/g," ")).replace(/\s+/g," ")).replace(/(^\s*)|(\s*$)/g,"")}getAllWords(){return this._normalizedText?(this._allWords||(this._allWords=this._normalizedText.replace(/([0-9])[\.,]([0-9])/g,"$1$2").split(/\s/)),this._allWords):[]}countWords(){return this.getAllWords().length}countUniqueWords(){const t=this.getAllWords();return uniq(t).length}getAllSentences(){if(!this._allSentences){const t=this._text.trim().replace(/([^\.\!\…\?\n])(\n+)([\-–]?\s*)([A-ZÄÖÜÀÁÂÈÉÊÌÍÎÒÓÔÙÚÛ0-9])/g,"$1. $3$4").replace(/\n\n\s*/g," ");this._allSentences=window.tokenizer.sentences(t)}return this._allSentences||[]}countSentences(){return this.getAllSentences().length}getReadingTime(){return Math.round(this.countWords()/200)}getSpeakingTime(){return Math.round(this.countWords()/130)}countCharacters(){return this._text.trim().length}uniq(t){const e=[];return t.forEach(t=>{-1===e.indexOf(t)&&e.push(t)}),e}}