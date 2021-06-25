/*! (C) Copyright 2020 LanguageTooler GmbH. All rights reserved. */
class StringMap{constructor(h,t=StringMap.DEFAULT_CHUNK_SIZE){this._length=h.length,this._chars=h.split(""),this._chunkSize=t,this._cachedChunks=new Array(Math.ceil(this._length/this._chunkSize)).fill(""),this._value=h}_updateCachedChunks(){for(let h=0;h<this._cachedChunks.length;h++)if(!this._cachedChunks[h]){const t=h*this._chunkSize,i=t+this._chunkSize;this._cachedChunks[h]=this._chars.slice(t,i).join("")}}get length(){return this._length}set(h,t){for(let i=0;i<h.length;i++)this._chars[t+i]=h[i];const i=Math.floor(t/this._chunkSize),s=Math.ceil((t+h.length)/this._chunkSize);this._cachedChunks.fill("",i,s),this._value=null}fill(h,t=0,i=this._chars.length){this._chars.fill(h,t,i);const s=Math.floor(t/this._chunkSize),e=Math.ceil(i/this._chunkSize);this._cachedChunks.fill("",s,e),this._value=null}charAt(h){return this._chars[h]}substring(h,t){return null===this._value?this._chars.slice(h,t).join(""):this._value.substring(h,t)}toString(){return null===this._value&&(this._updateCachedChunks(),this._value=this._cachedChunks.join("")),this._value}}StringMap.DEFAULT_CHUNK_SIZE=512,"undefined"!=typeof module&&(module.exports.StringMap=StringMap);