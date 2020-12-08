// Инпуты
let inputBtn= document.querySelectorAll('#input'),
// блоки,которые меняем
changeBlocks=document.querySelectorAll('.colorBlock')

// Добавляем рандомный цвет блокам
changeBlocks.forEach(item =>{
	item.style.backgroundColor=`rgb(${random( 0,255)},${random( 0,255)},${random( 0,255)}`
})

// слушатель на все инпуты
inputBtn.forEach( item =>{
	item.addEventListener('change',changeSize)
})



// меняем высоту блока при изменении положения ползунка
function changeSize(e){
	value=e.target.value
	classInput=e.target.className;
	changeBlocks.forEach( item =>{
		if(item.id===classInput){
			item.style.height=`${value}%`;
		}
	})

}
// Рандом
function random( min,max){
	return Math.floor(Math.random() * (max - min)) + min;

}