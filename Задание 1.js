//Задание 1
const age = prompt('Введите Ваш возраст')
const age_example = +age
if(isNaN (age_example)){
  console.log('У нас NaN!!!')
}
else if(typeof age_example !== 'number'){
  console.log('Упс, кажется, Вы ошиблись')
}
else if(age_example % 2 === 0){
  console.log('Число четное')
}
else{
  console.log('Число нечетное')
}
