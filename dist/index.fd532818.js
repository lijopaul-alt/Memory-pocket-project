// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A7H4y":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "62d5dab885897b04655082d4fd532818";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
"strict";
// details in objects
const user1 = {
  username: "lijo paul",
  password: "lijo",
  facebook: ["lijo paul19", "naughty"],
  instagram: ["lijo_paul19", "13paul"],
  twitter: ["lijopaul199", "notHere"],
  Gmail: ["lijo paul", "  Bond99"],
  Github: ["lijo-alt19", "bonus"],
};

const user2 = {
  username: "livin paul",
  password: "livin",
  facebook: ["livin paul19", "naughty"],
  instagram: ["livin_paul19", "13paul"],
  twitter: ["livinpaul199", "notHere"],
  Gmail: ["livin paul", "  Bond99"],
  Github: ["livin-alt19", "bonus"],
};
let controller;
let user3 = {};
const accounts = [user1, user2];
// Getting necessary elements
const Section1 = document.querySelector(".section-1");
const nav = document.querySelector(".navbar");
const AboutDiv = document.querySelector(".ABOUT-US");
const navDiv = document.querySelector(".nav-div");
const openAccBtn = document.querySelector(".open--account");
const signupHome = document.querySelector(".home--btn");
const signinHome = document.querySelector(".home--btn--1");
const headerSec = document.querySelector(".header--sec");
const signupSec = document.querySelector(".signup--sec");
const Aboutusection = document.querySelector(".aboutus--sec");
const signinbtn = document.querySelector(".signin--btn");
const signupNav = document.querySelector(".movedown");
const closeBtn = document.querySelector(".close--btn");
const linkTo = document.querySelector(".change--color");
const detailsPage = document.querySelector(".details");
const detailsinfo = document.querySelector(".detail--1");
const logoutBtn = document.querySelector(".detail--btn");
const signInsec = document.querySelector(".form-container");
const signInNav = document.querySelector(".signin--navigate");
const anc = document.querySelector(".anc");
const submitBtn = document.querySelector(".submit-btn");
const success = document.querySelector(".link-color");
const append = document.querySelector(".necessary");
const btnbtn = document.querySelector(".btn-btn");
const footer = document.querySelector(".foot");

// sigin-inputs
const Username = document.querySelector(".user--input");
const Password = document.querySelector(".pass-input");

// signup inputs
const signupUser = document.querySelector(".signup-user");
const signupPass = document.querySelector(".signup-password");
const FbUser = document.querySelector(".fb-user");
const fbPass = document.querySelector(".fb-pass");
const instaUser = document.querySelector(".insta-user");
const instaPass = document.querySelector(".insta-pass");
const twitUser = document.querySelector(".twit-user");
const twitPass = document.querySelector(".twit-pass");
const gmailUser = document.querySelector(".gmail-user");
const gmailPass = document.querySelector(".gmail-pass");
const gitUser = document.querySelector(".git-user");
const gitPass = document.querySelector(".git-pass");
// smooth scrolling
document.querySelector(".navbar").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// fade effects on link
const HandleOver = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sibling = link.closest(".nav-links").querySelectorAll(".nav-link");
    sibling.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", HandleOver.bind(0.5));
nav.addEventListener("mouseout", HandleOver.bind(1));

const navHeight = nav.getBoundingClientRect().height + 40;

// displaying form hiding other content
const revealAndHideSignup = function (e) {
  signupSec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    Section1.classList.toggle("hidden");
    headerSec.classList.toggle("hidden");
    Aboutusection.classList.toggle("hidden");
  }, 500);
};

const signupBacktoHome = function (e) {
  Section1.classList.toggle("hidden");
  headerSec.classList.toggle("hidden");
  Aboutusection.classList.toggle("hidden");
  const id = e.target.querySelector(".anc");
  const element = id.getAttribute("href");

  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => signupSec.classList.toggle("hidden"), 500);
};
const revealAndHideSignin = function (e) {
  signInsec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  console.log(id);

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    Section1.classList.toggle("hidden");
    headerSec.classList.toggle("hidden");
    Aboutusection.classList.toggle("hidden");
    footer.classList.toggle("hidden");
  }, 500);
};

const signinBacktoHome = function (e) {
  Section1.classList.toggle("hidden");
  headerSec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  Aboutusection.classList.toggle("hidden");
  setTimeout(() => {
    signInsec.classList.toggle("hidden");
    footer.classList.toggle("hidden");
  }, 100);
};

openAccBtn.addEventListener("click", revealAndHideSignup);
signupNav.addEventListener("click", revealAndHideSignup);
signupHome.addEventListener("click", signupBacktoHome);
signInNav.addEventListener("click", revealAndHideSignin);
signinHome.addEventListener("click", signinBacktoHome);

// making nav sticky
const handleObserver = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    navDiv.classList.add("sticky");
  }
  if (!entry.isIntersecting) {
    navDiv.classList.remove("sticky");
  }
};
const NavdivObserver = new IntersectionObserver(handleObserver, {
  root: null,
  threshold: 0.6,
});
NavdivObserver.observe(AboutDiv);

// collecting info
const collectData = function (e) {
  e.preventDefault();
  user3 = {
    username: signupUser.value,
    password: signupPass.value,
    facebook: [FbUser.value, fbPass.value],
    instagram: [instaUser.value, instaPass.value],
    twitter: [twitUser.value, twitPass.value],
    Gmail: [gmailUser.value, gmailPass.value],
    Github: [gitUser.value, gitPass.value],
  };
  accounts.push(user3);
  Section1.classList.toggle("hidden");
  signupSec.classList.toggle("hidden");
  headerSec.classList.toggle("hidden");
  Aboutusection.classList.toggle("hidden");

  const value = [
    signupUser,
    signupPass,
    FbUser,
    fbPass,
    instaUser,
    instaPass,
    twitUser,
    twitPass,
    gmailUser,
    gmailPass,
    gitUser,
    gitPass,
  ];

  value.forEach((val) => (val.value = ""));
  setTimeout(
    () => alert(`use have successfully signed up now try sign in`),
    1000
  );
};

submitBtn.addEventListener("click", collectData);

// rendering details
let toRemove;
const updateUI = function (obj) {
  const html = `
  <div class="row "id="Details">
    <h1 >welcome To Memory Power </h1>
  </div>
  <div class="row info--1">
    <h4>Hello ${obj.username}!</h4>

  </div>
  </div wrapper>
  <div class="row user">
   <div class="col-4 paint">
     <h3 class="name">USERNAME</h3>
   </div>
   <div class="col-1">

   </div>
   <div class="col-4 paint">
      <h3 class="name">PASSWORD</h3>
   </div>
  </div>
  <div class="user--saved">
  <div class="row ">
    <div class="col-1">
    <i class="fa fa-facebook-official fa-2x fb-user-1"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail fb-user-1">${obj.facebook[0]}</h4>
    </div>
    <div class="col-1">
     
    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail fb-user-1">${obj.facebook[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-instagram fa-2x insta-user-1"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail insta-user-1">${obj.instagram[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail insta-user-1">${obj.instagram[1]}</h4>
    </div>
  </div>
  <div class="row space ">
    <div class="col-1">
    <i class="fa fa-twitter-square fa-2x twitter-user-1"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail  twitter-user-1">${obj.twitter[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail  twitter-user-1">${obj.twitter[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-envelope fa-2x gmail-user-1"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail gmail-user-1">${obj.Gmail[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail gmail-user-1">${obj.Gmail[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-github fa-2x git-user-1"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail git-user-1">${obj.Github[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail git-user-1">${obj.Github[1]}</h4>
    </div>
    </div>`;
  append.insertAdjacentHTML("afterbegin", html);
};
let value;
const RenderShow = function (acc) {
  controller = acc.find((user) => user.username === Username.value);
  if (controller) {
    value = controller.password === Password.value;
  }
  if (!controller) {
    // signInsec.classList.remove("hidden");
    (Username.value = ""), (Password.value = "");

    // detailsPage.classList.add("hidden");
    // headerSec.classList.add("hidden");
    // Aboutusection.classList.add("hidden");
  }

  if (value) {
    updateUI(controller);
    (Username.value = ""), (Password.value = "");
  }
  if (!value) {
    (Username.value = ""), (Password.value = "");
  }
};

// navugating to details page

const navigate = function () {
  RenderShow(accounts);
  if (!controller && !value) {
    alert("username and password incorrect please try again");
    // signInsec.classList.remove("hidden");
    // detailsPage.classList.add("hidden");
    // headerSec.classList.add("hidden");
    // Aboutusection.classList.add("hidden");
  }
  if (!controller && value) {
    alert("username  went wrong");
  }
  if (controller && !value) {
    alert(`password went wrong`);
  }
  if (controller && value) {
    signInsec.classList.add("hidden");

    detailsPage.classList.remove("hidden");
    headerSec.classList.add("hidden");
    Aboutusection.classList.add("hidden");
    btnbtn.classList.toggle("hidden");
  }
};

const AlterNative = function () {
  detailsPage.classList.toggle("hidden");

  Section1.classList.remove("hidden");
  headerSec.classList.remove("hidden");
  Aboutusection.classList.toggle("hidden");
  btnbtn.classList.toggle("hidden");
  append.innerHTML = "";
};
signinbtn.addEventListener("click", navigate);
logoutBtn.addEventListener("click", AlterNative);

},{}]},["A7H4y","4ee1I"], "4ee1I", "parcelRequiref6e0")

//# sourceMappingURL=index.fd532818.js.map
