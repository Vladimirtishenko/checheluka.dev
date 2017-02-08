'use strict';

export default class Helper {
    constructor() {
        (function Base() {

          console.info('Base define');
          if (!Element.prototype.closest) {

            Element.prototype.closest = function(css) {
              var node = this;

              while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
              }
              return null;
            };
          }

        })();
    }

    flyEvent(action, listen, element, callback) {

        let oneCallback = false,
            callbackTohandler,
            count = 0;

        if (callback instanceof Array && element.length != callback.length) {
            throw {
                message: "The number of elements handler does not match"
            }
        } else if (typeof callback == "function") {
            oneCallback = true;
        }


        listen.forEach(listener);

        function listener(item, i) {
            element.forEach(elements.bind(this, item))
        }

        function elements(item, items, j) {

            if (!items) return;

            callbackTohandler = oneCallback ? callback : callback[j];

            try {
                items[action + 'EventListener'](item, callbackTohandler);
            } catch (e) {
                [].forEach.call(items, function(el, c) {
                    el[action + 'EventListener'](item, callbackTohandler);
                })
            }

        }

    }

    classChange(what, events, el) {


        for (var i = 0; i < what.length; i++) {

            for (var j = 0; j < el.length; j++) {

                try {
                    el[j].classList[events](what[i]);
                } catch (e) {
                    console.log(e);
                }

            }
        }

    }

    cssHelper(el, styles) {

        if(!el || !styles) return;

        if (el.length != styles.length) {
            throw {
                message: "The number of elements does not match"
            }
        }

        el.forEach(cicleElements);

        function cicleElements(item, i) {
            try {
                item.style.cssText += styles[i]
            } catch (e) {
                [].forEach.call(item, function(elem, j) {
                    elem.style.cssText += styles[i]
                })
            }
        }
    }

    xhrRequest(method, url, header, data, callback, self){

        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        if(header){
            xhr.setRequestHeader('Content-Type', header)
        }
        
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(xhr.responseText, self);
            }
        }

        xhr.send(data || null);
    }


}
