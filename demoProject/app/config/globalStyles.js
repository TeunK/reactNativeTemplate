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

export const colors = {
	white: '#FFF',

	green1: "#168900",
	green2: "#19ba00",
	green3: "#9fff82",

	red1: "#890000",
	red2: "#c90000",
	red3: "#d89688",

	blue1: "#030089",
	blue2: "#2f74f1",
	blue3: "#a5afc2",


};

export default globalStyles = StyleSheet.create({

	// POSITIONING
	flex: {display:"flex"},
	flexDirectionColumn: {flexDirection: 'column'},
	flexDirectionRow: {flexDirection: 'row'},
	flexVerticalCenter: {alignSelf: 'center'},

	// TEXT ALIGNMENT
	txtl: {textAlign:"left"},
	txtm: {textAlign:"center"},
	txtr: {textAlign:"right"},

	// BACKGROUND COLOR
	bgWhite: {backgroundColor: colors.white},

	bgGreen1: {backgroundColor: colors.green1},
	bgGreen2: {backgroundColor: colors.green2},
	bgGreen3: {backgroundColor: colors.green3},

	bgRed1: {backgroundColor: colors.red1},
	bgRed2: {backgroundColor: colors.red2},
	bgRed3: {backgroundColor: colors.red3},

	bgBlue1: {backgroundColor: colors.blue1},
	bgBlue2: {backgroundColor: colors.blue2},
	bgBlue3: {backgroundColor: colors.blue3},

	// COLOR
	cWhite: {color: colors.white},

	cGreen1: {color: colors.green1},
	cGreen2: {color: colors.green2},
	cGreen3: {color: colors.green3},

	cRed1: {color: colors.red1},
	cRed2: {color: colors.red2},
	cRed3: {color: colors.red3},

	cBlue1: {color: colors.blue1},
	cBlue2: {color: colors.blue2},
	cBlue3: {color: colors.blue3},

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

	// PADDING
	p0: {padding: 0},
	pxs: {padding: constants.xs},
	ps: {padding: constants.s},
	pm: {padding: constants.m},
	pl: {padding: constants.l},
	pxl: {padding: constants.xl},
	pxxl: {padding: constants.xxl},

	// MARGIN
	mxs: {margin: constants.xs},
	ms: {margin: constants.s},
	mm: {margin: constants.m},
	ml: {margin: constants.l},
	mxl: {margin: constants.xl},
	mxxl: {margin: constants.xxl},

	// MARGIN BOTTOM
	m0: {margin: 0},
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