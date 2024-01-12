const navDAta =[
  {
    id:1,
    title_uz: 'Bosh sahifa',
    title_en: 'Home'
  },
  {
    id:2,
    title_uz: 'Biz haqimizda',
    title_en: 'About'
  },
  {
    id:3,
    title_uz: 'Biz bilan boglanish',
    title_en: 'Contact'
  },
  {
    id:4,
    title_uz: 'Til',
    title_en: 'Lang'
  },
]

const heroData = [
 {
  id: 1,
  title_uz: 'Xush kelibsiz',
  title_en: 'Welcome'
 },
 {
  id: 2,
  title_uz: 'Kompaniyaning ozi juda muvaffaqiyatli kompaniya. Haqiqatan ham qochib ketadimi? U hech qachon katta zavqni qaytarmaydi va uning hech biriga erisha olmaydi. Bu sizning mashq mashqingiz boladi   Bas hamd aytuvchilar uchun magfirat bolsin',
  title_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, fugit pariatur? Numquam repellat voluptate magnam, ullam eaque adipisci. Enim facilis ut odit aperiam repellendus exercitationem Laudantium vel itaque dolores qui'
 }
]

let elNavLinks = document.querySelectorAll('.nav_link')
let elHeroTitle = document.querySelector('.hero_title')
let elHeroDec = document.querySelector('.hero_dec')



function fnLang(value){
  window.localStorage.setItem('leng', value)
  elNavLinks.forEach((item, index) =>{
    console.log(navDAta[index]);
    item.textContent = navDAta[index][`title_${value}`]
  })
  elHeroTitle.textContent = heroData[0][`title_${value}`]
  elHeroDec.textContent = heroData[1][`title_${value}`]
}
fnLang('uz')
// let a = {
//   title_en: 'hello',
//   title_uz: 'salom'
// }
// let value = 'uz'
// console.log(a[`title_${value}`]);