import { ObjectDirective } from 'vue';

export const formatter: ObjectDirective = {
  updated(el, binding) {
    // if (binding.value == undefined) return;
    //  binding.value;
    const ele = el.getElementsByTagName('input')[0]
    console.log(el.value)
    let formatter1 = formatter1111(String(binding.value));
    console.log(formatter1)
    ele.value=formatter1;

  },
};


 function formatter1111(value){
  let values = value
    .replace(/[^0-9.]/g,'')
    .replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    .replace(/,/g, '').split('.');
  // const values = formParams.depreciationAmtRmb;
  values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // formParams.depreciationAmtRmb=values.join('.')
  return values.join('.')
}
