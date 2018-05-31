document.getElementById('next-btn').addEventListener('mousedown', function (){
	document.getElementById('next-btn').classList.add('next-btn-click')
	console.log('success!')
})


document.getElementById('next-btn').addEventListener('mouseup', function (){
	document.getElementById('next-btn').classList.remove('next-btn-click')
	console.log('success... again!')
})
;
