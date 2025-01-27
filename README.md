# node-spfm-denjhang
 This revision fixes the conversion of YM2612.PCM to YM2608.ADPCM.

 
先安装nodejs，cmder，安装nvm安装npm 16.0.0  
npm -i  
npm install -g  

spfm play --help  


spfm config  
选择AY8910-3.58   
spfm play Playlist.m3u --simulate-ym2612-dac adpcm2  
adpcm2适合音频流  

spfm play Playlist.m3u --simulate-ym2612-dac adpcm  
adpcm2适合普通DAC命令  

spfm play Playlist.m3u --simulate-ym2612-dac ssg  
不适合实时播放。仅适合转换到vgm  

