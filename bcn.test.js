const bnc = require('./bcn');

describe('obj', () => {
    it('Возвращает блок', () => {
        expect(bnc({b: 'blockName'})).toBe('blockName');
    });
    it('Возвращает элемент блока', () => {
        expect(bnc({b: 'blockName', e: 'element'})).toBe('blockName__element');
    });
    it('Возвращает блок + модификатор', () => {
        expect(bnc({b: 'blockName', mod: 'modName'})).toBe('blockName blockName_modName');
    });
    it('Возвращает блок + модификатор(массив)', () => {
        expect(bnc({b: 'blockName', mod: ['modName1', 'modName2']})).toBe('blockName blockName_modName1 blockName_modName2');
    });

    it('Возвращает блок + модификатор', () => {
        expect(bnc({b: 'blockName', mod: 'modName'})).toBe('blockName blockName_modName');
    });
    it('Возвращает элемент блока + модификатор', () => {
        expect(bnc({b: 'blockName', e: 'element', mod: 'modName'})).toBe('blockName__element blockName__element_modName');
    });
    it('Возвращает элемент блока + модификатор(массив)', () => {
        expect(bnc({b: 'blockName', e: 'element', mod: ['modName1', 'modName2']})).toBe('blockName__element blockName__element_modName1 blockName__element_modName2');
    });

    it('Возвращает блок + микс', () => {
        expect(bnc({b: 'blockName', mix: 'mix'})).toBe('blockName mix');
    });
    it('Возвращает блок + микс(массив)', () => {
        expect(bnc({b: 'blockName', mix: ['mix1', 'mix2']})).toBe('blockName mix1 mix2');
    });


    it('Возвращает блок + модификатор(массив) + микс', () => {
        expect(bnc({b: 'blockName', mod: ['modName1', 'modName2'], mix: 'mix'})).toBe('blockName blockName_modName1 blockName_modName2 mix');
    });
    it('Возвращает элемент блока + модификатор + микс', () => {
        expect(bnc({b: 'blockName', e: 'element', mod: 'modName', mix: 'mix'})).toBe('blockName__element blockName__element_modName mix');
    });
})