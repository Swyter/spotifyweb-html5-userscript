// ==UserScript==
// @name        HTML5 thingie for Spotify Web Player
// @description Play music on the browser without having to install Flash Player. Yes, I know why SWF bridges exist.
// @author      Swyter
// @namespace   https://greasyfork.org/users/4813-swyter
// @match       https://play.spotify.com/*
// @version     2016.01.30
// /* turns out we now need to run on frames too to make our flashless context menu copying mechanism work */ @noframes
// @icon        https://i.imgur.com/LHkCkka.png
// @grant       none
// @run-at      document-start
// ==/UserScript==

  /* it's random, trust me, I'm Sony! :) */
  Object.defineProperty(window.Math, 'random',
  {
    configurable: false,
    writable: false,
    value: function(a) { return 0.1337; }
  });


  /* SWF work proof reimplemented by @theSmallNothing at GitHub (https://github.com/Shigawire/node-spotify-web/commit/64fbd3620c9cec6238717a3fcf99b97c356ad85e)
     believe me, you don't want to unravel that maze of stack popping, bitshifts/arithmetic/xoring and conditional transformations, let it be.
     --
     x-> thingy goes in, (???) thingy goes out x-> */
  function ping_pong(paddle)
  {
    for(var ab=paddle.split(' '),a={},L=0;L<ab.length;L++){var wa=parseInt(ab[L]);a[4*L+1]=wa&255;a[4*L+2]=wa>>8&255;
    a[4*L+3]=wa>>16&255;a[4*L+4]=wa>>24&255}var W,M,Ka,b,x,ia,N,bb,xa,O,X,La,q,ya,d,ja,C,l,g,D,Ma,ka,r,e,la,Y,za,
    h,y,Aa,E,Na,t,Z,F,P,Oa,Q,R,Pa,Qa,ma,Ba,Ca,na,m,Ra,z,aa,oa,pa,ba,S,Da,ca,u,da,Sa,Ea,G,H,qa,v,I,Ta,J,Ua,ra,c,sa,
    Fa,ta,f,ua,va,Va,Wa,Ga,Xa,Ha,ea,w,Ya,A,K,T,Za,n,$a,fa,p,ga,U,k,B,V,Ia,ha,Ja;n=a[0]=1;r=a[0];H=a[r+4];b=a[0];
    C=a[b+24];A=b+24;H<C&&(b=a[0],c=a[b+28],a[A]=c,a[b+28]=C,C=c);ha=a[0];b=a[ha+64];G=b^42;a[ha+64]=G;l=a[0];
    b=a[l+56];N=b^42;a[l+56]=N;b=a[0];h=b+20;Ba=a[b+20];b=Ba^23;c=a[0];x=c+68;q=a[c+68];c=q^201;
    b>=c?(b=a[0],va=a[b+8]):(b=a[0],c=a[b+72],c^=65,a[b+72]=c,b=a[0],c=a[b+8],va=c^65,a[b+8]=va);B=a[0];b=a[B+48];
    da=b^136;a[B+48]=da;v=a[0];b=a[v+52];Y=b^136;a[v+52]=Y;Ja=a[0];J=a[Ja+36];za=a[n];a[Ja+36]=za;a[n]=J;c=C^127;
    b=va^39;bb=a[0];b<c&&(J^=186,a[n]=J,b=a[0],c=a[b+44],c^=186,a[b+44]=c);Za=a[0];z=a[Za+16];Oa=C;z<Ba&&(a[A]=Y,
    a[v+52]=C,Oa=Y,Y=C);k=Za+16;u=a[0];b=a[u+76];a[u+76]=H;D=Y^4;a[v+52]=D;K=a[0];Ca=a[K+40];c=Ca^4;a[K+40]=c;
    Aa=a[0];ya=a[Aa+72];a[Aa+72]=z;a[k]=ya;Da=Oa^188;a[A]=Da;Ua=b^188;a[r+4]=Ua;w=a[0];U=a[w+12];a[w+12]=N;a[l+56]=U;
    Na=a[0];ra=a[Na+28];ia=da;ra<da&&(a[B+48]=G,a[ha+64]=da,ia=G,G=da);O=N;q<N&&(a[w+12]=H,a[u+76]=N,O=H,H=N);b=U^41;
    c=H^253;c<b&&(c=a[0],b=a[c+32],a[c+32]=D,D=a[v+52]=b);ma=J;z<Da&&(a[x]=J,ma=a[n]=q,q=J);Ya=a[0];b=G^193;na=a[Ya+44];
    c=na^54;c<b&&(U^=51,a[l+56]=U,O^=51,a[w+12]=O);e=Ja+36;V=Aa+72;ba=Na+28;a[x]=D;a[e]=q;a[v+52]=za;b=O^15;a[w+12]=b;
    b=ra^15;a[ba]=b;a[V]=ya;a[k]=z;c=G^89;qa=a[0];ua=a[qa+60];b=ua^204;$a=D;b<c&&(a[x]=q,a[e]=D,$a=q,q=D);ea=bb+8;
    ga=Ya+44;b=ma^9;a[n]=b;b=59*Ua;b+=8555;Ha=b%255;a[r+4]=Ha;b=220*va;b+=53020;ja=b%255;a[ea]=ja;b=O^184;b*=141;
    P=b%255;a[w+12]=P;Ra=z^25;a[k]=Ra;b=153*Ba;b%=255;ca=b^37;a[h]=ca;b=214*Da;b+=15622;Ma=b%255;a[A]=Ma;b=ra^162;
    a[ba]=b;Qa=a[0];a[Qa+32]=0;b=149*q;b%=255;ka=b^138;a[e]=ka;b=Ca^114;a[K+40]=b;b=U^223;W=b%255;a[ga]=W;Xa=ia^191;
    a[B+48]=Xa;S=na^166;a[v+52]=S;b=za^84;b*=25;sa=b%255;a[l+56]=sa;b=ua^216;a[qa+60]=b;b=65*G;b+=12675;Q=b%255;
    a[ha+64]=Q;b=151*$a;b+=20234;m=b%255;a[x]=m;b=49*ya;xa=b%255;g=xa^103;a[V]=g;b=198*H;Ta=b%255;Sa=Ta^84;a[u+76]=Sa;
    c=P^208;b=sa^192;Ga=ka;b<c&&(a[h]=ka,Ga=a[e]=ca,ca=ka);R=Ga^74;a[e]=R;a[u+76]=Xa;a[B+48]=Sa;d=ca^38;a[h]=d;b=ma^101;
    a[n]=b;a[x]=Ra;a[k]=m;b=P^199;c=xa^206;c<b&&(m^=89,a[k]=m,R=Ga^19,a[e]=R);Ia=ra^128;a[ba]=Ia;La=ma^71;a[n]=La;T=P;
    ja<g&&(a[e]=P,T=a[w+12]=R,R=P);F=ia^26;a[u+76]=F;f=Ha^165;a[r+4]=f;F<m&&(f=Ha^98,a[r+4]=f,d=ca^225,a[h]=d);b=W^230;
    a[ga]=b;oa=Ca^148;a[K+40]=oa;b=ja^52;c=W^215;E=oa;c<b&&(a[K+40]=f,a[r+4]=oa,E=f,f=oa);pa=Qa+32;a[pa]=130;fa=ua^90;
    a[qa+60]=fa;p=sa^92;a[l+56]=p;Wa=z^69;a[x]=Wa;c=d^247;b=d^79;b<c&&(g=xa^114,a[V]=g,m^=21,a[k]=m);la=R^227;a[e]=la;
    Ka=ja^227;a[ea]=Ka;c=g^104;b=T^107;t=la;b<c&&(a[e]=d,a[h]=la,t=d,d=la);b=115*La;Fa=b%255;b=Fa^11;a[n]=b;b=Q^35;
    c=na^6;c<b&&(b=35*f,b%=255,f=b^219,a[r+4]=f);b=74*Ka;Ea=b%255;aa=Ea^234;a[ea]=aa;E<Ia&&(b=150*T,b+=4650,T=b%255,
    a[w+12]=T);b=m<<4;Va=b%255;I=Va^201;a[k]=I;F<aa&&(b=d^39,b*=91,d=b%255,a[h]=d);b=247*Ma;Pa=b%255;M=Pa^211;a[A]=M;
    b=147*Ia;b+=6468;c=b%255;a[ba]=c;a[pa]=201;b=na^43;c^=248;c<b&&(b=30*t,b+=6180,t=b%255,a[e]=t);c=z^161;b=Ea^121;
    b<c&&(b=E^73,b*=14,E=b%255,a[K+40]=E);b=W^128;a[ga]=b;b=Ta^160;b*=155;y=b%255;a[B+48]=y;b=g^172;c=y^230;
    c<b&&(b=59*S,b%=255,S=b^150,a[v+52]=S);Wa<g&&(p=sa^185,a[l+56]=p);F<S&&(fa=ua^130,a[qa+60]=fa);b=f^93;c=Ea^28;
    c<b&&(b=Q^158,b*=98,Q=b%255,a[ha+64]=Q);y<aa&&(t^=157,a[e]=t,g^=157,a[V]=g);t<y&&(I=Va^103,a[k]=I,p^=174,a[l+56]=p);
    F<f&&(I^=17,a[k]=I,p^=17,a[l+56]=p);ta=f^221;a[r+4]=ta;X=Fa^104;a[n]=X;Z=d^190;a[h]=Z;a[A]=F;a[u+76]=M;a[l+56]=E;
    a[K+40]=p;aa<E&&(Z=d^149,a[h]=Z,ta=f^246,a[r+4]=ta);b=fa^21;c=fa^164;c<b&&(y^=168,a[B+48]=y,a[pa]=97);a[n]=t;a[e]=Z;
    a[h]=X;b=ia^131;b<Z&&(X=Fa^147,a[h]=X,M=Pa^40,a[u+76]=M);a[k]=M;a[u+76]=I;b=M^118;c=Q^207;c<b&&(a[V]=aa,a[ea]=g);
    a[A]=y;a[B+48]=F;b=z^37;a[x]=b;b=T^96;a[w+12]=b;c=ta^103;b=X^10;b<c&&(b=S^80,a[v+52]=b,b=W^208,a[ga]=b);
    return [a[ga],a[k],a[ea],a[ba],a[A],a[x],a[V],a[h],a[pa],a[e]].join(' ');
  }

  /* ZeroClipboard.js HTML5 shim, no ridiculous SWF overlay required, sneaky! */
  Object.defineProperty(window, 'ZeroClipboard',
  {
    configurable: false,
    writable: false,
    value: function(e)
    {
      console.log("ZC constructor", arguments);

      e.addEventListener('click', function (x)
      {
        x.preventDefault();

        /* add a dummy input to our page, fill it with our text, select it,
           copy it, remove our dummy item; voila, typical js kludge! */
        input = document.createElement('input');
        input.value = this.dataset.clipboardText;

        document.body.appendChild(input);

        input.select(); document.execCommand('copy');

        document.body.removeChild(input);

        console.log("ZC -> click", this, this.dataset.clipboardText, input, input.value);
      });

      return {
        on: function(e, f)
        {
          console.log("ZC -> on", arguments, this, this.elem);
          this.elem.addEventListener(e, f);
        },

        elem: e
      };
    }
  });

  ZeroClipboard.config = function(){ console.log("ZC -> config", arguments) };


  /* SWFobject.js faker, sneaky! */
  Object.defineProperty(window, 'swfobject',
  {
    configurable: false,
    writable: false,
    value:
    {
      getFlashPlayerVersion: function(){ console.log("-<-< getFlashPlayerVersion =>", arguments); return { major: 11, minor: 2, release: 202 }; },
      hasFlashPlayerVersion: function(){ console.log("-<-< hasFlashPlayerVersion =>", arguments); return true; },
      embedSWF:              function(swf, parent_id, unk_a, unk_b, req_flash_ver, unk_c, properties)
      {
        console.log("-<-< embedSWF =>", arguments, arguments[9].toString(), this, properties);

        /* create our audio player in substitution of the swf abobination */
        var dummy = document.createElement("audio");

        dummy.id             = properties.id;
        dummy["instanceid"]  = properties.instanceId;

        dummy.loop           = false;
        dummy.preload        = 'auto';
        dummy.autoplay       = false;
        dummy.volume         = 1.0;

        dummy.sp_run         = function(proof) { console.log("-<-< sp_run =>",      arguments); return ping_pong(proof); };
        dummy.sp_hasSound    = function()      { console.log("-<-< sp_hasSound =>", arguments); return true };
        dummy.sp_load        = function(player_id, raw_uri, options)
        {
          /* if we want to avoid the mixed content warning due to unencrypted/wrong cert for domain we must switch things around
             e.g: http://audio-mp3-fa.spotify.com => https://audio-mp3-fa.scdn.co */
          var uri = raw_uri.replace('http://', 'https://').replace('.spotify.com', '.scdn.co');

          console.log("sp_load =>", arguments, this, raw_uri, uri);

          /* grab the encrypted track file */
          xhr = new XMLHttpRequest();
          xhr.open('GET', uri);
          xhr.responseType = "arraybuffer";

          xhr.onloadstart = function(e)
          {
            console.log("(XX) ASYNC RETRIEVAL OF ENCRYPTED SONG STARTED, URL: ", this)
            this['start_date'] = new Date();
          }

          /* decrypt it asynchronously after download with the provided song key and some hardcoded constants */
          xhr.onloadend = function(e)
          {
            if (this.status !== 200)
            {
              console.error("No tracks available here.");
              return;
            }
            
            console.log(`(XX) ENCRYPTED SONG DOWNLOADED in ${(new Date() - this.start_date) / 1e3} secs: `, this)

            return;
            
            var mp3_enc = this.response;
            
            //-- 
            
            /* Stream key derivation algorithm and RC4 decryption reverse-engineered and reimplemented by the unreal @theSmallNothing at GitHub
               (https://github.com/mattyway/node-spotify-web/pull/2/files) */
          
            dummy.src = URL.createObjectURL(
              new Blob([mp3_dec], {type: 'audio/mpeg'})
            );

            if (options.startFrom !== 0)
              dummy.currentTime = Math.floor(0.001 * options.startFrom);

            if (options.autoplay)
              dummy.play();
          };
          
          xhr.send();

          /* lie and tell the framework that we have loaded the song, even if the file is still in transit,
             we don't want it to get impatient and switch to the next song */
          unsafeWindow.Spotify.Instances.get(dummy.instanceid).audioManager.getPlayerById(player_id).trigger('LOAD', {}, {id: player_id});
        };

        /* dummy functions after __noSuchMethod__ was deprecated in Firefox 44 */
        dummy.sp_initializePlayerById = function(player_id)      { console.log("=> sp_initializePlayerById",  arguments); };
        dummy.sp_stop                 = function(player_id)      { console.log("=> sp_stop",                  arguments); };

        /* actual reimplementations of functions that embody the internal SWF interface */
        dummy.sp_setVolume   = function(player_id, vol) { console.log("=> volume", arguments); if (player_id == "main:A" && vol !== 0) this.volume = vol };
        dummy.sp_getVolume   = function(player_id, vol) { console.log("=> golume", arguments); if (player_id == "main:A" && vol !== 0) return parseFloat(this.volume); else return 0 };
        dummy.sp_seek        = function(player_id, pos) { console.log("=> seek",   arguments); this.currentTime = Math.floor(0.001 * pos) };
        dummy.sp_pause       = function(player_id)      { console.log("=> pause",  arguments); this.pause() };
        dummy.sp_resume      = function(player_id)      { console.log("=> pause",  arguments); this.play() };

        dummy.sp_playerState = function(player_id)
        {
          return {
            volume: this.volume,
            position: Math.floor(1000 * this.currentTime),
            duration: Math.floor(1000 * this.duration),
            isPlaying: !this.paused,
            isStopped: false,
            isPaused: this.paused
          };
        };

        dummy.sp_addPlayer   = function(player_index, player_id, player_protocol)
        {
          if (player_id != "main:A")
            return;

          var sp_html5_event_listeners =
          {
                   canplay: 'LOAD',
                   playing: 'PLAYING',
                     pause: 'PAUSED',
                     ended: 'TRACK_ENDED',
            durationchange: 'DURATION',
                  progress: 'PROGRESS',
                     error: 'PLAYBACK_FAILED'
          };

          function sp_html5_generic_callback(e)
          {
            console.log("sp html5 audio «" + e.type + "» event", e, sp_html5_event_listeners[e.type]);

            var ret;

            switch(sp_html5_event_listeners[e.type])
            {
              case 'DURATION':
                ret = {duration: Math.floor(1000 * this.duration)};
                break;

              case 'PROGRESS':
                ret = {position: Math.floor(1000 * this.currentTime)};
                break;

              default:
                ret = {};
            }

            unsafeWindow.Spotify.Instances.get(this.instanceid).audioManager.getPlayerById(player_id).trigger(sp_html5_event_listeners[e.type], ret, {id: player_id});
          }

          for (var i_event in sp_html5_event_listeners)
            this.addEventListener(i_event, sp_html5_generic_callback);

          return true;
        };

        dummy.__noSuchMethod__  = function(name, params) { console.log('==>>== > invalid function call', name, params); };

        /* necessary for the spotify framework to find it in the right place */
        window.document[properties.id] = dummy;

        /* insert our dummy audio player in the requested element */
        document.getElementById(parent_id).appendChild(dummy);

        /* tell the spotify framework that the swf embed is ready */
        arguments[9].apply(this, [{success: true}]);

        // act as the swf bridge and tell it that the Flash-backend is ready
        // JSInterface.notify(ApplicationEvents.READY,null,1);
        //Spotify.Instances.get(properties.instanceId).audioManager.getInterface()._triggerDeferred('FLASH_AVAILABLE', null);
        Spotify.Instances.get(properties.instanceId).audioManager.getInterface()._triggerDeferred('READY', null);

        console.log("AUDIOMANAGER-INTERFACE", properties.id, window.document[properties.id], Spotify.Instances.get(properties.instanceId).audioManager.getInterface(),
                    Spotify.Instances.get(properties.instanceId).audioManager.getInterface().hasSound());
      }
    }
  });


function when_external_loaded()
{
// --- 

/* wait until the page is ready for the code snippet to run */
document.addEventListener('DOMContentLoaded', function()
{
  console.log("!!! DOMContentLoaded");

  WebSocket.prototype.sond = WebSocket.prototype.send;
  WebSocket.prototype.send = function(msg)
  {
    window.sp_ws = this;

    if (this.onmessage && this.sucks !== true)
    {
      callback = this.onmessage;

      console.log("orig prev callback:", callback);

      this.onmessage = function(message)
      {
        var json_msg = JSON.parse(message.data);

        //if (json_msg.id === window.last_track_msg)
          console.info("<- ws recv: ", window.last_track_msg, message.data);

        //if (json_msg && json_msg.result && json_msg.result.uri)
          //open(json_msg.result.uri);

        callback(message);
      }

      this.sucks = true;
    }

    var json_msg = JSON.parse(msg);

    // get the http link instead or rtmp, thankies!
    if (json_msg && json_msg.name == 'sp/track_uri')
    {
      arguments[0] = msg.replace(',"rtmp"', '');
      window.last_track_msg = json_msg.id;
      console.info("-> ws send: ",  json_msg.id, msg);
    }
    //dec_msg = json_msg.name === 'sp/hm_b64' ? atob(json_msg.args[0]) : null;

    console.info("-> ws send: ", msg); //json_msg, dec_msg);

    //if (json_msg.name !== 'sp/log')
     return WebSocket.prototype.sond.apply(this, arguments);
  }

});

// ---
}

if (window != window.parent)
  throw "This should only execute in the main context frame...";

/* inject this cleaning function right in the page to avoid silly sandbox-related greasemonkey limitations */
window.document.head.appendChild(
  inject_fn = document.createElement("script")
);

inject_fn.innerHTML = '(' + when_external_loaded.toString() + ')()';

