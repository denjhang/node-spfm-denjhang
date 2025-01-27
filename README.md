# node-spfm-denjhang
 This revision fixes the conversion of YM2612.PCM to YM2608.ADPCM.

##  Usage Tutorial:  
First install nodejs, cmder, install nvm and install npm 16.0.0   
npm -i  
npm install -g  

spfm play --help  


spfm config  
Select AY8910-1.732MHz;YM2608-8MHz.     
spfm play Playlist.m3u --simulate-ym2612-dac adpcm2  
The adpcm2 mode loads slowly and is suitable for more complex PCM samples, such as Mega Turrican.    

spfm play Playlist.m3u --simulate-ym2612-dac adpcm  
adpcm2 is suitable for music that uses normal DAC commands, such as the Streets of Rage series.    

spfm play Playlist.m3u --simulate-ym2612-dac ssg  
The SSG mode conversion efficiency is very low and is not suitable for real-time playback. It is only suitable for conversion to vgm.    

