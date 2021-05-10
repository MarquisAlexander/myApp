import {MaskService} from 'react-native-masked-text';

export const maskMoney = (text) => {
    return MaskService.toMask('money', text, {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
      suffixUnit: '',
    });
  };