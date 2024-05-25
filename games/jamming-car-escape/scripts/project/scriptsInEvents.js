


const scriptsInEvents = {

	async Epokimanagerandinit_Event2_Act1(runtime, localVars)
	{
		runtime.globalVars.PokiHasInitialised = globalThis.PokiHasInitialised;
	},

	async Epokimanagerandinit_Event2_Act2(runtime, localVars)
	{
		runtime.globalVars.AdBlockerDetect = globalThis.AdBlockerDetect;
	},

	async Epokimanagerandinit_Event15_Act1(runtime, localVars)
	{
		PokiSDK.gameLoadingStart();
		console.log ("gameloasing has started");
	},

	async Epokimanagerandinit_Event16_Act1(runtime, localVars)
	{
		PokiSDK.gameLoadingFinished();
		console.log ("game loading has finished");
	},

	async Epokimanagerandinit_Event19_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStart();
		console.log("Gameplay has started");
	},

	async Epokimanagerandinit_Event21_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStop();
		console.log("Gameplay has stoped");
	},

	async Epokimanagerandinit_Event26_Act5(runtime, localVars)
	{
		PokiSDK.commercialBreak().then(
		    () => {
		        console.log("Commercial break finished, proceeding to game");
				runtime.globalVars.GmIsPaused = false;
				runtime.globalVars.PokiIsPlayingMidrollAd=false;	
				runtime.callFunction("SetMuteOrInmuted", false);
				runtime.callFunction("BackFromMidRoll");
		    }
		);
	},

	async Epokimanagerandinit_Event31_Act5(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  runtime.callFunction("DuplicateCoin");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 runtime.callFunction("FaildedAd");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event35_Act4(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  runtime.callFunction("SkipLevel");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 runtime.callFunction("SkipLevelFailed");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event39_Act4(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  runtime.callFunction("More3Turn");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 runtime.callFunction("More3TurnFailded");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event43_Act4(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  //runtime.callFunction("More3Turn");
				  runtime.callFunction("UnlockSkin");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 //runtime.callFunction("More3TurnFailded");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event47_Act4(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  //runtime.callFunction("More3Turn");
				  runtime.callFunction("MultiplyMoney");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 //runtime.callFunction("More3TurnFailded");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event51_Act4(runtime, localVars)
	{
		PokiSDK.rewardedBreak(() => {
		//antes de ejecutar
		window.ad
		}).then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.GmIsPaused = false;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  // ad reward
				  // put funcion reward
				  //runtime.callFunction("More3Turn");
				  runtime.callFunction("SpinWheel");
				
		        }
		        else {
		          // video not displayed, should probably not give reward
				 //runtime.callFunction("More3TurnFailded");
				 runtime.globalVars.GmIsPaused = false;
				 runtime.globalVars.PokiIsPlayingRewardedAd=false;		  
		        }
				runtime.callFunction("SetMuteOrInmuted", false);
				
		    }
			
		);
	},

	async Epokimanagerandinit_Event53_Act1(runtime, localVars)
	{
		(function detectAdblockWithInvalidURL(callback) {
		  var flaggedURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		
		  if (window.fetch) {
		    var request = new Request(flaggedURL, {
		      method: 'HEAD',
		      mode: 'no-cors',
		    });
		    fetch(request)
		      .then(function(response) {
		        if (response.status === 404) {
		          callback(false);
		        }
		      })
		      .catch(function(error) {
		//debugger
		        callback(true);
		      });
		  } else {
		    var http = new XMLHttpRequest();
		    http.open('HEAD', flaggedURL, false);
		
		    try {
		      http.send();
		    } catch (err) {
		      callback(true);
		    }
		
		    if (http.status === 404) {
		      callback(false);
		    }
		  }
		})(function(usingAdblock) {
		  //console.log("Using Adblocker: " + usingAdblock);
		  runtime.globalVars.AdBlockerDetect = 1;
		})
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

