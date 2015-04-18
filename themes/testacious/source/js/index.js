;(function() {
  var postsList = document.querySelector('.post-list');
  if(!postsList) return;
  postsList.addEventListener("click", function(e) {
    console.log(e.target);
    if(e.target.classList.contains('post-list-item'))
      window.location = e.target.getAttribute('data-link-to');
  })
})();

;(function() {
  var defaultPrefix = "test",
      r = Math.random,
      rv = function(m) { return r() * m; },
      rvi = function(m) { return rv(m) | 0; },
      rvib = function(m,n) { return rvi(n-m) + m; };

  var prefixes = [
    "aud", "bod", "cap", "contum", "ed",
    "effic", "fall", "fug", "gr", "hell", "ineffic",
    "loqu", "mend", "perspic", "pertin", "pred", "pugn",
    "rap", "sag", "sal", "sequ", "sp", "ten", "ungr",
    "ver", "vor"];

  var head = document.getElementById("header"),
      el = document.getElementById("testacious");

  var pause = rvib.bind(void 0, 33, 120)
  var erase = function(done) {
    setTimeout(function next() {
      var str = el.innerHTML.slice(0,-1);
      el.innerHTML = str;
      if(str.length > 0) {
        setTimeout(next, pause());
      } else {
        done();
      }
    }, pause());
  };

  var type = function(word, done) {
    var idx = 0;
    setTimeout(function next() {
      idx++;
      el.innerHTML = word.slice(0,idx);
      if(idx < word.length) {
        setTimeout(next, pause());
      } else {
        done();
      }
    }, pause())
  };

  var test = false;

  (function loop() {
    head.classList.remove("typing");
    setTimeout(function() {
      head.classList.add("typing");
      setTimeout(function() {
        var nextPrefix = test ? defaultPrefix : prefixes[r() * prefixes.length | 0];
        test = !test;
        erase(type.bind(void 0, nextPrefix, loop));
      }, 500);
    }, 3000);
  })();

})();
