/**
 * Created by Jason钟 on 2017/6/8.
 */
import {PixelRatio} from 'react-native';

const pixel_1 = (1 / PixelRatio.get()).toFixed(2);

export function pixeled(pix){
    return pix * pixel_1;
}