const lyrics="Tumi bondhu Kala pakhi ami jeno ki. Bosonte kale tomai bolte cai ami"
const parts = lyrics.split(' ')
const sentence=lyrics.split('.')
const char = lyrics.split('')
console.log(parts)
console.log(sentence)
console.log(char)

//slice
const partial = lyrics.slice(5,8)
console.log(partial)
const partial2 = lyrics.substring(5,8)
console.log(partial2)

const lines = [
    "Tumi amar valobasa",
    "ami tomai valobasi",
    "kala kala sada sada"
];

const newsong = lines.join(':')
console.log(newsong)
console.log(lines)