/*! (C) Copyright 2020 LanguageTooler GmbH. All rights reserved. */
class HistoricPremiumErrorsTeaser{constructor(e,t,r,i){this._container=e,this._componentName=t,this._historicPremiumErrorCount=r,this._dayCount=i,this._storageController=StorageController.create()}_translate(){translateSection(this._container);translateElement(this._text,{key:"historicPremiumErrorsText2",isHTML:!0,interpolations:[this._historicPremiumErrorCount,this._dayCount]})}_observe(){this._element.addEventListener("click",()=>{Tracker.trackEvent("Action",`${this._componentName}:historic_premium_teaser:click`)})}render(){loadStylesheet("/teaser/historicPremiumErrors/historicPremiumErrors.css"),loadHTML("/teaser/historicPremiumErrors/historicPremiumErrors.html").then(e=>{this._container.innerHTML=e,this._element=this._container.querySelector("#historic-premium-errors-teaser"),this._text=this._container.querySelector("#lt-historic-premium-errors-teaser-text"),this._button=this._container.querySelector("#lt-historic-premium-errors-teaser-button"),this._translate(),this._observe(),Tracker.trackEvent("Action",`${this._componentName}:historic_premium_teaser`);let t="addon2-dialog-historic-premium-errors";this._element.addEventListener("click",e=>{const r={command:"OPEN_PREMIUM_PAGE",campaign:t,historicMatches:this._historicPremiumErrorCount};browser.runtime.sendMessage(r),e.preventDefault()}),this._storageController.onReady(()=>{this._storageController.startChangelogCoupon();const e=this._storageController.getActiveCoupon();e&&(this._button.classList.add("lt-historic-premium-errors-teaser-discount"),t=t.replace("addon2-dialog","addon2-changelog"),this._renderCoupon(e),window.clearInterval(this._interval),this._interval=window.setInterval(()=>this._renderCoupon(e),1e3))})})}_renderCoupon(e){if(!this._button)return;let t=i18nManager.getMessage("upgradeTeaserDiscount",[e.percent]);t+=` <span class="lt-historic-premium-errors-teaser-discount-expires">${i18nManager.getMessage("changelogDiscountExpires")} ${getCountdown(e.expires)}</span>`,this._button.innerHTML=t}}