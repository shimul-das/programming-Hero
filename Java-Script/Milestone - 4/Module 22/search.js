const lyrics="Tumi bondhu Kala pakhi ami jeno ki. Bosonte kale tomai bolte cai ami"

const doesexit = lyrics.includes('pakhi')
console.log(doesexit)
//case sensitive  
//STRING E KONO KICU NA THAKLE -1 SHOW KORBE
console.log(lyrics.indexOf('pakhiAA'));
if(lyrics.indexOf('pakhi')!=-1){
    console.log("exist")
}
console.log(lyrics.startsWith("Tumi"));