import {Random} from 'meteor/random';

if (window.GoogleAnalyticsObject) {
  throw new Error('Google Analytics seems to be loaded from another source');
}

function googleAnalyticsObject(...args) {
  googleAnalyticsObject.q.push(args);
}

googleAnalyticsObject.q = [];
googleAnalyticsObject.l = (new Date()).getTime();

const googleAnalyticsObjectId = `_google_analytics_${Random.id()}`;
window.GoogleAnalyticsObject = googleAnalyticsObjectId;
window[googleAnalyticsObjectId] = googleAnalyticsObject;

function ga(...args) {
  const googleAnalyticsObject = window[googleAnalyticsObjectId];

  return googleAnalyticsObject.apply(null, args);
}

const scriptElement = document.createElement('script');
const firstScriptElement = document.getElementsByTagName('script')[0];
scriptElement.async = 1;
scriptElement.src = '//www.google-analytics.com/analytics.js';
firstScriptElement.parentNode.insertBefore(scriptElement, firstScriptElement);

export {ga};
