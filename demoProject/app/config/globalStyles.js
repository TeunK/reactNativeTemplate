/**
 * Created by Teun on 16-5-2018.
 */
import {StyleSheet} from 'react-native';

const constants = {
	xs: 4,
	s: 8,
	m: 12,
	l: 16,
	xl: 20,
	xxl: 40
};

export default globalStyles = StyleSheet.create({

	// POSITIONING
	flex: {display:"flex"},
	flexDirectionColumn: {flexDirection: 'column'},
	flexDirectionRow: {flexDirection: 'row'},

	// TEXT ALIGNMENT
	txtl: {textAlign:"left"},
	txtm: {textAlign:"center"},
	txtr: {textAlign:"right"},

	// FONT STYLE

	// FONT SIZE
	fs6: {fontSize: 6},
	fs8: {fontSize: 8},
	fs5: {fontSize: 5},
	fs10: {fontSize: 10},
	fs12: {fontSize: 12},
	fs14: {fontSize: 14},
	fs15: {fontSize: 15},
	fs16: {fontSize: 16},
	fs18: {fontSize: 18},
	fs20: {fontSize: 20},
	fs22: {fontSize: 22},
	fs24: {fontSize: 24},
	fs25: {fontSize: 25},
	fs30: {fontSize: 30},
	fs40: {fontSize: 40},

	// WIDTH
	w10: {width: 10},
	w15: {width: 15},
	w20: {width: 20},
	w25: {width: 25},
	w30: {width: 30},
	w35: {width: 35},
	w40: {width: 40},
	w45: {width: 45},
	w50: {width: 50},
	w75: {width: 75},
	w100: {width: 100},

	// HEIGHT
	h10: {height: 10},
	h15: {height: 15},
	h20: {height: 20},
	h25: {height: 25},
	h30: {height: 30},
	h35: {height: 35},
	h40: {height: 40},
	h45: {height: 45},
	h50: {height: 50},
	h75: {height: 75},
	h100: {height: 100},

	// MARGIN
	mxs: {margin: constants.xs},
	ms: {margin: constants.s},
	mm: {margin: constants.m},
	ml: {margin: constants.l},
	mxl: {margin: constants.xl},
	mxxl: {margin: constants.xxl},

	// MARGIN BOTTOM
	mbxs: {marginBottom: constants.xs},
	mbs: {marginBottom: constants.s},
	mbm: {marginBottom: constants.m},
	mbl: {marginBottom: constants.l},
	mbxl: {marginBottom: constants.xl},
	mbxxl: {marginBottom: constants.xxl},

	// MARGIN TOP
	mtxs: {marginTop: constants.xs},
	mts: {marginTop: constants.s},
	mtm: {marginTop: constants.m},
	mtl: {marginTop: constants.l},
	mtxl: {marginTop: constants.xl},
	mtxxl: {marginTop: constants.xxl},

	// MARGIN LEFT
	mlxs: {marginLeft: constants.xs},
	mls: {marginLeft: constants.s},
	mlm: {marginLeft: constants.m},
	mll: {marginLeft: constants.l},
	mlxl: {marginLeft: constants.xl},
	mlxxl: {marginLeft: constants.xxl},

	// MARGIN RIGHT
	mrxs: {marginRight: constants.xs},
	mrs: {marginRight: constants.s},
	mrm: {marginRight: constants.m},
	mrl: {marginRight: constants.l},
	mrxl: {marginRight: constants.xl},
	mrxxl: {marginRight: constants.xxl},
});