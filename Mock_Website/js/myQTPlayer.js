/**
 * myQTPlayer v1.0: Javascript function that works with qtobject.js and is used to build the object.
 * Derived by www.webado.net  from the original by  
 * by Geoff Stearns (geoff@deconcept.com, http://www.deconcept.com/)
 * 
 *
 * For all usage credits must remain intact.
 * usage: myQTPlayer(myfile, myid, width, height,autoplay,autostart);
 */

function myQTPlayer (myid,myfile,width,height,autoplay,autostart,controller,loop) {
// on input height of movie needs to be increased by 144px for the full controls - width stays the same
// audio player only needs a height from 45px to 145px depending on options
/*
				var qtVid = new WMPObject(myfile, 'MMPlayer1', width, height);
				qtVid.addParam('TYPE', 'application/x-mplayer2');
				qtVid.addParam('PLUGINSPACE', 'http://www.microsoft.com/Windows/MediaPlayer/download/default.asp');
				qtVid.addParam('Autostart', autostart);  // needed for Firefox otherwise it defaults to ON
				qtVid.addParam('ShowControls', showcontrols); 
				qtVid.addParam('ShowDisplay', showdisplay); 
				qtVid.addParam('ShowStatusBar', showstatusbar); 
				qtVid.addParam('Autoplay', autoplay); 

				qtVid.addParam('DefaultFrame', 'Slide'); 
 				qtVid.write(mymediaid);
*/				
				var qtautopplay = autoplay; if (autoplay === 1) {qtautoplay = true; }
				qtautoplay = true;
				
				var qtautostart = autostart; if (autostart === 1) {qtautostart = true; }
				
				var myQTObject = new QTObject(myfile, myid, width, height);
				myQTObject.addParam("autostart", qtautostart); 
				myQTObject.addParam("autoplay", qtautoplay); 
				myQTObject.addParam("controller", "false");
				myQTObject.addParam("loop", "true");
				//myQTObject.addParam("bgcolor","800000");
				myQTObject.write();


}