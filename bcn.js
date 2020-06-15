const elem = (blockName, element) => {
    return `${blockName}__${element}`
}
const mod = (elem, mod) => {
    if(Array.isArray(mod)) {
        return mod.map(e => `${elem}_${e}`).join(' ')
    }
    return `${elem}_${mod}`;
}

const bnc = (obj) => {
    const res = [];

    // Добавляет объект если нет элемента
    if(obj.b && !obj.e) {
        res.push(obj.b)
    }
    // Добавляет элемент
    if(obj.e) {
        res.push(elem(obj.b,obj.e))
    }
    // Добавляет модификатор если есть элемент или блок
    if(obj.b && obj.mod || obj.e && obj.mod) {
        res.push(mod(res[0], obj.mod))
    }
    // Добавляет микс
    if(obj.mix) {
        Array.isArray(obj.mix) ? obj.mix.map(e=> res.push(e)) : res.push(obj.mix)
    }
    return res.join(' ')
}
module.exports = bnc;