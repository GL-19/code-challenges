function canConstruct(ransomNote, magazine) {
	if (magazine.length < ransomNote.length) {
		return false;
	}

	const magazineArray = [...magazine];

	for (let element of ransomNote) {
		for (let j = 0; j < magazineArray.length; j++) {
			if (element === magazineArray[j]) {
				magazineArray.splice(j, 1);
				break;
			} else if (j === magazineArray.length - 1) {
				return false;
			}
		}
	}

	return true;
}

console.log(canConstruct("a", "a"));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
